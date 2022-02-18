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

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Error in resource/router.js',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
