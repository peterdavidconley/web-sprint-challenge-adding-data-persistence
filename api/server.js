const express = require('express');

// Importing routers
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

// Routers
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

// Catch-all endpoint
server.use('*', (req, res) => {
    res.json({ api: 'api catch-all endpoint'})
  })

module.exports = server;

