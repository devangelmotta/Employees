const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employees = new Schema({
  id: {
    type: String
  },
  employee_name: {
    type: String
  },
  employee_salary: {
    type: String
  },
  employee_age: {
    type: Number
  },

  create_at: {
    type: Date
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employees', Employees);