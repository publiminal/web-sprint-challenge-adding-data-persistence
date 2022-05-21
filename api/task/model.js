// build your `Task` model here
const db = require('../../data/dbConfig')

const TASKS = 'tasks'

async function get() {
    const query = await db
        .select('*')
        .from(TASKS)
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
    return result
}


module.exports = {
    get,
    getByid, 
    create
}