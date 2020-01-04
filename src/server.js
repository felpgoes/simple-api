const express = require('express')
const app = express();
const usersController = require('./app/controllers/users')
const companiesController = require('./app/controllers/companies')

app.use(express.json())

app.listen(3000, () => {
    console.log('API on localhost:3000');
})

app.get('/users', usersController.getAll)

app.get('/users/:id', usersController.getUserById)

app.get('/companies', companiesController.getAll)

app.get('/companies/id/:id', companiesController.getCompanyById)

app.get('/companies/owner/:id', companiesController.getCompanyByOwner )

app.get('/users/companies/:id', usersController.getUserWithCompanies)

app.post('/users', usersController.create)

app.post('/companies', companiesController.create)

app.get('/ping', (req, res) => {
    return res.send('pong')
})
