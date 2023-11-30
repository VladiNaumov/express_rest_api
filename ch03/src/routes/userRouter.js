const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();


//GET
userRouter.get("/users", userController.getUsers)

// GET по id
userRouter.get("/users/:id", userController.getUsersId)

// POST получение отправленных данных
userRouter.post("/users", userController.addUser)

// DEL удаление пользователя по id
userRouter.delete("/users/:id", userController.deletedUser)

// PUT по id изменение пользователя
userRouter.put("/users/:id", userController.putUser)

module.exports = userRouter;