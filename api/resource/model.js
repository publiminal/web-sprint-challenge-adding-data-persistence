// build your `Resource` model here
const db = require('../../data/dbConfig')


const RESOURCES = 'resources'

async function get() {
    const query = await db
        .select('*')
        .from(RESOURCES)
        const result = query.map(resource => { return { ...resource }})
    return result
}

async function getByid(id) {
    const query = await db
        .select('*')
        .from(RESOURCES)
        .where({resource_id:id}).first()
    return query
}


async function create(resource) {
    const newResourceId = await db(RESOURCES).insert(resource)

    const result = await db
        .select('*')
        .from(RESOURCES)
        .where({resource_id:newResourceId}).first()
    return result
}

const getResourceNameById = async name => {
    const query = await db
    .select('*').from(RESOURCES).where({resource_name:name}).first()
    return query
  }

module.exports = {
    get,
    getByid, 
    create, 
    getResourceNameById
}