// build your `Task` model here
const db = require('../../data/dbConfig')

const TASKS = 'tasks'



/* 

SELECT  task_id, 
        task_description,
        task_notes,
        task_completed,
        project_name,
        project_description
  FROM tasks 
    JOIN projects ON tasks.project_id = projects.project_id;  


*/



async function get() {
    const query = await db
        .select('task_id', 'task_description','task_notes', 'task_completed', 'project_name','project_description')
        .from(TASKS)
        .join('projects', 'tasks.project_id ', 'projects.project_id')
        // const result = query.map(task => { return { ...task }})
        const result = query.map(task => { return { ...task, task_completed:Boolean(parseInt(task.task_completed)) }})

    return result
}

async function getByid(id) {
    const query = await db
        .select('*')
        .from(TASKS)
        .where({task_id:id}).first()
    return query
}


async function create(resource) {
    const newTaskid = await db(TASKS).insert(resource)

    const result = await db
        .select('*')
        .from(TASKS)
        .where({task_id:newTaskid}).first()
        const formatedResult = {...result, task_completed:Boolean(parseInt(result.task_completed))  }
        return formatedResult
}


module.exports = {
    get,
    getByid, 
    create
}