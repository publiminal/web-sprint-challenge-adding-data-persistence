// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router')
const server = express();

server.use(express.json());
server.use('/api/projects' ,projectsRouter)


module.exports = server;

const db = require('../data/dbConfig')

async function query(project){

    const query = await db('projects')
    .insert(project)

    
     const result = await db
    .select('*')
    .from('projects')
    .where({project_id:query}).first()
    // const result = query.map(project => { return { ...project, project_completed:Boolean(parseInt(project.project_completed)) }}) 

    // return result
    

   // return result

    // const query = await db('schemes')
    console.log('////////////')
    console.log(query)
    console.log(result)
    console.log('////////////')

}
const p = {project_name:"bar",project_description:null,project_completed:0}
// query(p)