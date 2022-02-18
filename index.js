const server = require('./api/server');

const port = 7100;

server.listen(port, () => {
    console.log(`**** Server listening on port ${port} ****`)
})
