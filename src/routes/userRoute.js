const express = require('express');
const {getUsers,getUser,createUser,editUser,deleteUser}  = require('../controller/userController');
const { validateBody } = require('../model/users');
const route = express.Router();

route.post('/',validateBody,createUser)

route.get('/',getUsers)

route.get('/:userId', getUser)

route.put('/:userId',validateBody, editUser)

route.delete('/:userId',deleteUser)


module.exports = route;