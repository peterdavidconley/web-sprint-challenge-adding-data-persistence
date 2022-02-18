const db = require('../../data/dbConfig');

// `[GET] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Each task must include `project_name` and `project_description` - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`


function find () {

    return Promise.resolve('/api/tasks GET endpoint working')

}

// `[POST] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`


function create () {

}

module.exports = {

    find,
    create,
    
}