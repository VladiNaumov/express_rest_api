const {Router} = require('express')
const Todoruote = require('../models/todo')
const router = Router()

const nodes = [
  {isIst: true, deu: 'der Hunger', rus: 'голод'},
  {isIst: true, deu: 'die Costen', rus: 'покупать'},
  {isIst: true, deu: 'jetzt', rus: 'сейчас'},
  {isIst: true, deu: 'spät', rus: 'поздно'},
  {isIst: true, deu: 'ainkaufen', rus: 'покупать'},
]

// GET Получение списка задач
router.get('/', async (req, res) => {
  try {

    //const todos = await Todoruote.findAll()
    res.status(200).json(nodes)
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
    const todo = await Todoruote.create({
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
    const todo = await Todoruote.findByPk(+req.params.id)
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
    const todos = await Todoruote.findAll({
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