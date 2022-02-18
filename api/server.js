const express = require('express');
const server = express();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(express.json());

// server.use('/api/projects', projectRouter)
// server.use('/api/resources', projectRouter)
// server.use('/api/tasks', projectRouter)


server.use('*', (req, res) => {
    res.json({ api: 'API is up and running.'})    
})

module.exports = server;

