const dbConfig = require('../../../knexfile')
const knex = require('knex')(dbConfig)

module.exports = {
    async getAll(req, res){
        let data = await knex.select('*').from('companies');
        return res.send(data);
    },

    async getCompanyById(req, res){        
        let data = await knex.select('*').from('companies').where('id', req.params.id);
        return res.send(data);
    },

    async getCompanyByOwner(req, res){        
        let data = await knex.select('*').from('companies').where('owner', req.params.id);
        return res.send(data);
    },

    async create(req, res){
        const {name: company_name, owner} = req.body.company 
        let data = await knex('companies').insert({company_name, owner}).returning('*')
        return res.status(201).send(data);
    }
}