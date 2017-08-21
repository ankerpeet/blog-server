var express = require('express')
var router = express.Router()
var blogs = require('../models/blog')

//Blogs Standard Routes
router
  .get('/', (req, res, next) => {
    blogs.find({})
      .then(blogs => {
        res.send(blogs)
      })
      .catch(next)
  })
  .post('/', (req, res, next) => {
    blogs.create(req.body)
      .then(blog => {
          res.send(blog)
        }).catch(next)
  })
  .put('/:id', (req, res, next) => {
    var id = req.params.id
    blogs.findByIdAndUpdate(id, req.body)
      .then(blog => {
          res.send({ message: 'Successfully Updated' })
      }).catch(next)
  })
  .delete('/:id', (req, res, next) => {
    blogs.findByIdAndRemove(req.params.id)
      .then(blog => {
          res.send({ message: 'Successfully Removed' })
      }).catch(next)
  })
  
  router
  // CUSTOM ROUTES
  .get('/:id', (req, res, next) => {
    blogs.findById(req.params.id)
      .then(blog => {
        res.send(blog)
      }).catch(next)
  })
  
// ERROR HANDLER
router.use('/', (err, req, res, next) => {
  if (err) {
    res.send(418, {
      success: false,
      error: err.message
    })
  } else {
    res.send(400, {
      success: false,
      error: 'Something failed please try again later'
    })
  }
})

module.exports = router
