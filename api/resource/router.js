// build your `/api/resources` router here

const router = require('express').Router()
const db = require('./model')
const { checkPayload, checkResourceNameUnique  } = require('./middleware')

router.get('/', (req, res, next) => {
    db.get()
    .then(projects => { res.status(200).json(projects) })
    .catch(err => next(err))
})

// if payloads' body is valid, checkPayload includes it on req.project     
router.post('/', checkPayload, checkResourceNameUnique,  (req, res, next) => {
    db.create(req.resource)
    .then(resource => { res.status(200).json(resource) })
    .catch(err => next(err))
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })


module.exports = router