const dbConfig = require('../../../knexfile')
const knex = require('knex')(dbConfig)

module.exports = {
    async getAll(req, res){
        let data = await knex.select('*').from('users');
        return res.send(data);
    },

    async getUserById(req, res){        
        let data = await knex.select('*').from('users').where('id', req.params.id);
        return res.send(data);
    },

    async getUserWithCompanies(req, res){
        const data = await knex.select('*').from('companies').join('users', 'companies.owner', 'users.id');
        //to do: use groupBy function to group companies by users 
        return res.send(data);
    },

    async create(req, res){
        const {name, email} = req.body
        let data = await knex('users').insert({name, email}).returning('*')
        return res.status(201).send(data);
    }
}

function groupBy (array, property) {
    return array.reduce(function (acc, obj) {
      const key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }