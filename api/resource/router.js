const router = require('express').Router();
const Resources = require('./model');

//`[GET] /api/resources` - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

router.get('/', (req, res, next) => {

    Resources.find()
    .then(resource => {
      res.json(resource)
    })
    .catch(next)

})

// `[POST] /api/resources` - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

router.post('/', (req, res, next) => {
    
    Resources.create(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)

})

module.exports = router;
