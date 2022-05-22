// build your `Project` model here
const db = require('../../data/dbConfig')

async function get() {
    const query = await db
        .select('*')
        .from('projects')
        const result = query.map(project => { return { ...project, project_completed:Boolean(parseInt(project.project_completed)) }})
    return result
}

async function getByid(id) {
    const query = await db
        .select('*')
        .from('projects')
        .where({project_id:id}).first()
    return query
}


async function create(project) {
    const newProjectId = await db('projects').insert(project)

    const result = await db
        .select('*')
        .from('projects')
        .where({project_id:newProjectId}).first()
    const formatedResult = {...result, project_completed:Boolean(parseInt(result.project_completed))  }
    return formatedResult
}

module.exports = {
    get,
    getByid, 
    create
}