const db = require('../../data/dbConfig');

//`[GET] /api/projects`- Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

async function find() {
    const projectsRows = await db('projects as p')
    return projectsRows
}

//`[POST] /api/projects` - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

function create (project) {
    
    return db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
      })
}

module.exports = {

    find,
    create,
    
}