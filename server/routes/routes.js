const express = require('express')
const Task = require('../models/models')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const docs = await Task.find()
        res.json(docs)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



router.post('/', async (req, res) => {
    try {
      const task = new Task(req.body)
      const savedTask = await task.save()
      res.json(savedTask)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })


  router.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      )
      res.json(updatedTask)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })
  
router.delete('/:id', async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id)
      res.json(deletedTask)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })
 
  

module.exports = router
