
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description:"get these things done!!", notes:'not done yet', completed: false},
        {project_id: 2, description:"get these things done!!", notes:'not done yet', completed: false},
        {project_id: 3, description:"get these things done!!",  notes:'not done yet', completed: false},
      ]);
    });
};
