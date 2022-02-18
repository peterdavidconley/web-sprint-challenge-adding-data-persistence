const router = require('express').Router();
const Tasks = require('./model');

// `[GET] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Each task must include `project_name` and `project_description` - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

router.get('/', (req, res, next) => {

    Tasks.find()
    .then(task => {
      res.json(task)
    })
    .catch(next)

})

// `[POST] /api/tasks` - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

router.post('/', (req, res, next) => {
    
    Tasks.create(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Error in task/router.js',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
