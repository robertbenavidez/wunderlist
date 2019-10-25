
exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'mike', password: 'mike'},
      {username: 'glo', password: 'toe'},
      {username: 'rob', password: 'rob'}
    ]);
};
