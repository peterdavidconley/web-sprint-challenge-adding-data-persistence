const db = require('../../data/dbConfig');

// `[GET] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Each task must include `project_name` and `project_description` - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`


async function find () {

    const tasksRows = await db('tasks as t')
    return tasksRows  

}

// `[POST] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`


function create (task) {

    return db('tasks')
    .insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
      })
    
}

module.exports = {

    find,
    create,
    
}