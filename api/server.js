// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')
const server = express();

server.use(express.json());
server.use('/api/projects' ,projectsRouter)
server.use('/api/resources' ,resourcesRouter)
server.use('/api/tasks' ,tasksRouter)

module.exports = server;

const db = require('../data/dbConfig')

async function query(resource){

    const newResourceId = await db('resources').insert(resource)

    const result = await db
        .select('*')
        .from('resources')
        .where({resource_id:newResourceId}).first()
    // return result

    console.log('////////////')
    console.log(result)
    console.log('////////////')

}
const p = {resource_name:"barrios",resource_description:'los barrios'}
// query(p)