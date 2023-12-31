const {Router} = require('express')
const router = Router()
const db = require('../models/people')
//const GRUD = require("../example/CRUD.js");

// GET Получение списка задач
router.get('/', async (req, res) => {
  try {

    const todos = await db.findAll()
    res.status(200).json(todos)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// POST Создание новой задачи
router.post('/', async (req, res) => {
  try {
    const todo = await db.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({todo})

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// PUT Изменение задачи
router.put('/:id', async (req, res) => {
  try {
    const todo = await db.findByPk(+req.params.id)
    todo.done = req.body.done
    await todo.save()
    res.status(200).json({todo})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// DEL Удаление задачи
router.delete('/:id', async (req, res) => {
  try {
    const todos = await db.findAll({
      where: {
        id: +req.params.id
      }
    })
    const todo = todos[0]
    await todo.destroy()
    res.status(204).json({})

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router

