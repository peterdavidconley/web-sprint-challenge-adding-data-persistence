const db = require('../../data/dbConfig');

//`[GET] /api/resources` - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

function find () {

    return Promise.resolve('/api/resources GET endpoint working')
    
}

// `[POST] /api/resources` - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

function create () {
    
}

module.exports = {

    find,
    create,
    
}