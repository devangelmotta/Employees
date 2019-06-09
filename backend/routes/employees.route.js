// Employees routes
const router = require('express').Router();

const { getEmployees, existEmployee, updateEmployee, createEmployee, deleteEmployee } = require('../xhr_handler.js');
const { storage, uploadImage, handlerUploadImage} = require('../utils.js')
const { findUser, saveUserLocal, updateUserLocal, deleteUserLocal } = require('../service-handle-db-local')
// Require Employees model
let Employees = require('../db-models/employees');


// Defined get data(index or listing) route
router.get('/empleados', async(req, res, next) => {
    console.log("Entry employee route")
    let dataEmployees = await getEmployees()
    if(dataEmployees){
        res.json({dataEmployees})
    }else{
        res.json({"status": false, "msg":"Hubo un error al cargar los datos"})
    }
  });

  
router.post('/actualizar/info-empleado/:id', async(req, res, next) => {
    //handlerUploadImage(req);

    const { id} = req.params;
    const { employee_name, employee_salary, employee_age, profile_image} = req.body

    let dataEmployees = await existEmployee(id)

    if(dataEmployees){
        let queryData = await updateEmployee(id, employee_name, employee_salary, employee_age, profile_image)
        if(queryData){
          return res.json({"status": true, "msg": "Update successfully", queryData})
        }else{
          return res.json({"status": false, "msg": "No data found", queryData: []})
        }
        
    }else{
       let queryData = await  createEmployee(employee_name, employee_salary, employee_age, profile_image)
       if(queryData){
        return res.json({"status": true, "msg": "New employee", queryData})
      }else{
        return res.json({"status": false, "msg": "No data found", queryData: []})
      }
       
    }

  });

  router.get('/empleado/:id', async(req, res, next) => {
    console.log(">>> ID: ", req.params.id)
    const { id} = req.params;

    let dataEmployees = await existEmployee(id)

    if(dataEmployees){
      return res.json({"status": true, "msg": "Data employee", dataEmployees})
        
    }else{
      return res.json({"status": false, "msg": "Employee no found", dataEmployees: []})
    }

  });

  router.post('/nuevo-empleado', async(req, res, next) => {
    const { name, salary, age} = req.body
    
    let dataEmployee = await findUser(name);
    if(!dataEmployee){
        let newEmployee = await createEmployee(name, salary, age)
        if(typeof newEmployee === 'object'){
          console.log("Create employee")
          res.json({"status": true, newEmployee})
        }else{
          console.log("No create employee")

          res.json({"status": false, newEmployee:{}})
        }
        
    }else{
        let _updateEmployee = await updateEmployee(dataEmployee.id, name, salary, age)
        if(typeof _updateEmployee === 'object'){
          res.json({"status": true, "msg": "Nuevo empleado", _updateEmployee})
        }else{
          res.json({"status": true, "msg": "No se pudo crear empleado", _updateEmployee:{}})
        }
    }
  });

  router.get('/borrar-empleado/:id', async(req, res, next) => {

    const { id} = req.params;

    let dataEmployees = await existEmployee(id)
  
    if(dataEmployees){
        let _deleteEmployee = await deleteEmployee(id)
        if(typeof _deleteEmployee === 'object'){
          res.json({"status": true, "msg": "Empleado borrado", _deleteEmployee})
        }
    }else{
        res.json({"status": false, "msg":"El usuario no existe", _deleteEmployee:{}})
    }
  });


module.exports = router