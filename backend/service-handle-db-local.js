const { getEmployees } = require('./xhr_handler')
const mongoose = require('mongoose');
const EmployeesModel = require('./db-models/employees');

 var date = new Date()

async function findUser(name){
    let user = await EmployeesModel.findOne({employee_name: name})

    if(typeof user === 'object'){
        return user;
    }else return undefined
}

async function saveUserLocal(name, salary, age){
    let newUser = new EmployeesModel({
        id: "",
        employee_name: name,
        employee_salary: salary,
        employee_age: age,
        create_at: date
    })

    let saveUser = await newUser.save()

    if(saveUser) return true;
    else return false
}

async function updateUserLocal(id, name, salary, age){
    let obj = {
        employee_name: name,
        employee_salary: salary,
        employee_age: age
    }
    let updateUser = await EmployeesModel.findOneAndUpdate(id, obj)

    if(updateUser) return true
    else return false
}

async function deleteUserLocal(id){
    let deleteUser = await EmployeesModel.findOneAndDelete(id)
    if(deleteUser) return true
    else return false;
}

async function saveManyUsers(){

    let getUsers = await getEmployees();

    if(getUsers){
        let data = await EmployeesModel.find();
        if(data){
            if(data.length>0){
                let saveMany = await EmployeesModel.updateMany(getUsers)
                console.log("Update data: ", saveMany)
         
            }else{
                let inertMany = await EmployeesModel.insertMany(getUsers)
                console.log("Update data: ", inertMany) 
            }
        }
    }
}

module.exports = {
    findUser,
    saveUserLocal,
    updateUserLocal,
    deleteUserLocal,
    saveManyUsers
}