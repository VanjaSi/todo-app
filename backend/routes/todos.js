const {Router} = require('express')
const {getAllTodos, createTodo, deleteTodo, updateTodo, getSingleTodo} = require('../controllers/todoControllers')
const isValidId = require('../middlewares/isValidId')
const router = Router()

//get all todos
router.get('/todo',getAllTodos)

//create todo
router.post('/todo', createTodo)

//delete todo
router.delete('/todo/:id',isValidId, deleteTodo)

//update todo
router.patch('/todo/:id', isValidId, updateTodo)

//get single todo
router.get('/todo/:id', isValidId, getSingleTodo)


module.exports = router