/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id') // increments means Primary Key, AutoIncrement, not null
        tbl.string('project_name', 128).notNullable() // string means VarChar in knex
        tbl.string('project_description', 255)
        tbl.string('project_completed', 4)//.unsigned()//.notNullable()
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('resource_description', 255)
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description' ,255).notNullable()
        tbl.string('task_notes', 255)
        tbl.string('task_completed', 4)//.unsigned()//.notNullable()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('projects_resources', tbl => {
        tbl.increments('projects_resources_id')
        tbl.integer('resource_id').unsigned().notNullable()
            .references('resource_id').inTable('resources')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
        tbl.integer('project_id').unsigned().notNullable()
            .references('project_id').inTable('projects')
                .onDelete('RESTRICT').onUpdate('RESTRICT')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
