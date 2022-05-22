const projects = [
  { project_name:'Web API', project_description:'Build APIs'},
  { project_name:'Databases', project_description:'Learn SQL', project_completed:1},
  { project_name:'Authentication'},
]

const resources = [
  { resource_name: 'keyboard' },
  { resource_name: 'computer', resource_description: 'Windows PC' }
]

const tasks = [
  { task_description: 'Do foo', project_id: 1 },
  { task_description: 'Do bar', task_notes: 'Use Postman!', project_id: 1 },
  { task_description: 'Do baz', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }
]

/* const projects_resources = [{

}] */

exports.seed = async function(knex){
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    // await knex('projects_resources').insert(projects_resources)
}