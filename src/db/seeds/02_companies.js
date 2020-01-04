
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {company_name: 'Patrobras', owner: '2'},
        {company_name: 'paiN', owner: '3'},
        {company_name: 'Mibr', owner: '1'},
      ]);
    });
};
