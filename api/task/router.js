// build your `/api/tasks` router here


const router = require('express').Router()
const db = require('./model')
const { checkPayload } = require('./middleware')

router.get('/', (req, res, next) => {
    db.get()
    .then(tasks => { res.status(200).json(tasks) })
    .catch(err => next(err))
})

// if payloads' body is valid, checkPayload includes it on req.project     
router.post('/', checkPayload,   (req, res, next) => {
    db.create(req.task)
    .then(task => { res.status(200).json(task) })
    .catch(err => next(err))
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })


module.exports = router