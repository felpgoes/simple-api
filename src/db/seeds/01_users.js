
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Felipe', email: 'Felipe@hotmail.com'},
        {id: 2, name: 'Carla', email: 'Carla@hotmail.com'},
        {id: 3, name: 'Leonardo', email: 'Leonardo@hotmail.com'},
        {id: 4, name: 'Lilian', email: 'Lilian@hotmail.com'},
        {id: 5, name: 'Carlos', email: 'Carlos@hotmail.com'},
      ]);
    });
};
