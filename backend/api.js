const urlbase = 'http://dummy.restapiexample.com/api/v1/'
const endpoints = {
    allEmployees: urlbase + 'employees',
    singleEmployee: urlbase + 'employee/',
    createEmployee: urlbase + 'create',
    updateEmployee: urlbase + 'update/',
    deleteEmployee: urlbase + 'delete/'
}

module.exports = endpoints;