
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('description', 255).notNullable()
        tbl.boolean('completed').defaultTo(false)
    }).createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('description', 255).notNullable()
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.unique(['name']);
    }).createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('description', 255).notNullable()
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
