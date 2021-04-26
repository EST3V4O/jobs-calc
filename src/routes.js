const express = require("express")
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require("./controllers/JobController")
const DashboardController = require("./controllers/DashboardController")

// rota raiz -> index
routes.get('/', DashboardController.index)

// rota para job
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)

// rota job-edit
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)

// rota para profile
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;
