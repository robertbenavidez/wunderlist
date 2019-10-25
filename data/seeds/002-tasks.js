
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'paint the fence', recurring: false, user_id: 1},
    {description: 'sand the floor', recurring: false, user_id: 1},
    {description: 'wax on wax off', recurring: false, user_id: 1},
    {description: 'register at Lambda', recurring: false, user_id: 2},
    {description: 'study javascript', recurring: false, user_id: 2},
    {description: 'practice flexbox frogger', recurring: false, user_id: 2},
    {description: 'wash the dishes', recurring: false, user_id: 3},
    {description: 'clean the bathroom', recurring: false, user_id: 3},
    {description: 'vacuum the carpet', recurring: false, user_id: 3}
  ]);
};