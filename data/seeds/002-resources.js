
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {project_id: 1, name: 'shovel', description:"its a kind of digging thing"},
        {project_id: 2, name: 'hammer', description:"hitting thing"},
        {project_id: 3, name: 'nails', description:"its a kind of poking thing"},
        {project_id: 1, name: 'tape', description:"its a kind of sticky thing"},
        {project_id: 2, name: 'hat', description:"its a kind of protective thing"},
        {project_id: 3, name: 'dirt', description:"its a kind of earthy thing"},
       
      ]);
    });
};
