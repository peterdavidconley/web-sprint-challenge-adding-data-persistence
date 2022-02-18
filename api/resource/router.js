// build your `/api/resources` router here
const router = require('express').Router();


//`[GET] /api/resources` - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

router.get('/', (req, res, next) => {

})

// `[POST] /api/resources` - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

router.post('/', (req, res, next) => {
    
})

module.exports = router;
