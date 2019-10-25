
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'paint the fence', recurring: false },
    {description: 'sand the floor', recurring: false },
    {description: 'wax on wax off', recurring: false },
    {description: 'register at Lambda', recurring: false },
    {description: 'study javascript', recurring: false },
    {description: 'practice flexbox frogger', recurring: false },
    {description: 'wash the dishes', recurring: false },
    {description: 'clean the bathroom', recurring: false },
    {description: 'vacuum the carpet', recurring: false }
  ]);
};