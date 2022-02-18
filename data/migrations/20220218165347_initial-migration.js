
exports.up = async function(knex) {

  await knex.schema
  .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 150).notNullable()
      tbl.string('project_description', 500)
      tbl.boolean('project_completed').notNullable().defaultTo(0)
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
    tbl.boolean('task_completed').notNullable().defaultTo(0)
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
  .createTable('project_resources', tbl => {
    tbl.increments()
  })

};

exports.down = async function(knex) {
  
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    
};
