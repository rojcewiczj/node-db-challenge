const express = require('express');

const server = express();

const projectRouter = require('./api/projects/projectsRouter');
const resourcesRouter = require('./api/resources/resourcesRouter');

server.use(express.json());
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
    res.send('!!!!!!!!!!!!!!')
})

module.exports = server;