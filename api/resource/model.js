const db = require('../../data/dbConfig');

//`[GET] /api/resources` - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

async function find () {

    const resourcesRows = await db('resources as r')
    return resourcesRows    
}

// `[POST] /api/resources` - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

function create (resource) {
    
    return db('resources')
    .insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
      })
}

module.exports = {

    find,
    create,
    
}