const express = require('express');

const server = express();

const projectRouter = require('./api/projects-router');

server.use(express.json());
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.send('!!!!!!!!!!!!!!')
})

module.exports = server;