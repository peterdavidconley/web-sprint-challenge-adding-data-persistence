
exports.up = async function(knex) {

  await knex.schema
  .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 150).notNullable()
      tbl.string('project_description', 500)
      tbl.boolean('project_completed').defaultTo(0)
  })
  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.string('resource_name', 150).notNullable().unique()
    tbl.string('resource_description', 500)
  })
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description').notNullable()
    tbl.string('task_notes')
    tbl.boolean('task_completed').defaultTo(0)
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

        // data object from readme: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]
    
  })
  .createTable('project_resources', tbl => {
    tbl.increments('proj_resources_id')
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })

};

exports.down = async function(knex) {
  
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    
};
