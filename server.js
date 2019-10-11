const express = require('express');

const server = express();

const projectRouter = require('./api/projects/projectsRouter');

server.use(express.json());
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('!!!!!!!!!!!!!!')
})

module.exports = server;