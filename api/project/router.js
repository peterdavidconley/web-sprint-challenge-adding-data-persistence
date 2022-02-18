const router = require('express').Router();
const Projects = require('./model');


//`[GET] /api/projects`- Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

router.get('/', (req, res, next) => {

    Projects.find()
    .then(project => {
      res.json(project)
    })
    .catch(next)

})

//`[POST] /api/projects` - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post('/', (req, res, next) => {

  Projects.create(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
    
})


module.exports = router;
