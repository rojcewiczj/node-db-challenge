
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'clean house', description:'need to clean the house', completed: false},
        {name: 'repair roof', description:'you got a leeky roof!', completed: false},
        {name: 'tend garden', description:'want your own fresh veggies?', completed: false}
      ]);
    });
};
