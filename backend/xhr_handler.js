const endpoint = require('./api.js')
const fetch = require('node-fetch');
//const { findUser, saveUserLocal, updateUserLocal, deleteUserLocal } = require('./service-handle-db-local')

// Helpers for handle xhr request

async function getEmployees(){
    let query = await fetch(endpoint.allEmployees, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
    let data = await query.json();
    if(data){
        return data;
    }else {
        return false;
    }
}

async function createEmployee( name, salary, age){
    //let createUser = await saveUserLocal(name, salary, age)
    let query = await fetch(endpoint.createEmployee, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                name: name,
                salary: salary,
                age: age
            })
        })

    let data = await query.json();
    if(typeof data === 'object'){
        return data;
    }else {
        return undefined;
    }
}

async function updateEmployee(id, name, salary, age){
    //let updateUser = await updateUserLocal(id, name, salary, age)
    let query = await fetch(`${endpoint.updateEmployee}`+`${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                name: name,
                salary: salary,
                age: age,
            })
        })

    let data = await query.json();
    if(typeof data === 'object'){
        return data;
    }else {
        return undefined;
    }
}

async function deleteEmployee(id){
    //let deleteUser = await deleteUserLocal(id)

    let query = await fetch(`${endpoint.deleteEmployee}`+`${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            }
        })

    let data = await query.json();
    if(typeof data === 'object'){
        return data;
    }else {
        return undefined;
    }
}

async function existEmployee(id){
    console.log(">>> Id validate user", id)
    let query = await fetch(`${endpoint.singleEmployee}`+`${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        }
    })

    let data = await query.json();
    if(typeof data === 'object'){
        return data;
    }else {
        return undefined;
    }
}


module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    existEmployee
}
