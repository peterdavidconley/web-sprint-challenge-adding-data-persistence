const db = require('../../data/dbConfig');

//`[GET] /api/resources` - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

async function find () {

    const resourcesRows = await db('resources as r')
    return resourcesRows    
}

// `[POST] /api/resources` - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

function create () {
    
}

module.exports = {

    find,
    create,
    
}