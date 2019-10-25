
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl
            .string('username', 25)
            .notNullable()
            .unique()
        tbl
            .string('password', 25)
            .notNullable(); 
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .string('description', 50)
            .notNullable();
        tbl
            .boolean('recurring')
            .defaultTo(false)
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('users');    
};
