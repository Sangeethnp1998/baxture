const {getUsersArray } = require("../db")
const { v4: uuidv4 } = require('uuid');

let users = getUsersArray()

function getUsers(req,res){
    try {
        res.status(200).send({
            data: users
        })
    } catch (error) {
        res.send({
            message:"Internal server error"
        })
    }
}

function getUser(req,res){
    try {
        
        const user = users.filter((data)=>{
           return  data.id == req.params.userId 
        })

        res.send({
            message: "User found succesfully!",
            data: user
        })

    } catch (error) {
        res.send({
            message:"Internal server error"
        })
    }
}

 function createUser(req,res){
    try {
        let id = uuidv4();
        req.body.id = id;
        users.push(req.body);
        res.send({
            message: "User added succesfully!"
        })
    } catch (error) {
        res.send({
            message:"Internal server error"
        })
    }
    
}

function editUser(req,res){
    try {
        const user = users.filter((data)=>{
            return  data.id == req.params.userId 
        })
        const index = users.indexOf(user[0]);
        req.body.id = user[0].id;
        users[index] = req.body
        res.send({
            message: "User updated succesfully!"
        })
    } catch (error) {
        res.send({
            message:"Internal server error"
        })
    }
}

function deleteUser(req,res){
    try {
        const user = users.filter((data)=>{
           return  data.id == req.params.userId 
        })

        const index = users.indexOf(user[0]);
        users.splice(index,1)

        res.send({
            message: "User deleted succesfully!"
        })

    } catch (error) {
        res.send({
            message:"Internal server error"
        })
    }
}

module.exports ={
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}