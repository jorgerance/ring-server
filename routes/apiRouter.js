const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('index.ejs');
})

routes.get('/dashboard', (req, res) => {
    res.render('index.ejs');
})

module.exports = routes;