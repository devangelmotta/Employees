import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Employees from './models/Employees';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = 'http://localhost:4000/api';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router ) { }

  getEmployees() {
    return this
           .http
           .get(`${this.uri}/empleados`)
  }

  addEmployee(employee_name, employee_salary, employee_age) {
    const obj = {
      name: employee_name,
      salary: employee_salary,
      age: employee_age
    };
    console.log("Call to create employee")
    this.http.post(`${this.uri}/nuevo-empleado`, obj)
        .subscribe(res => this.router.navigate(['empleados']));
  }

  updateEmployee(name, salary, age, image, id) {
    const obj = {
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      profile_image: image
    };
    this.http.post(`${this.uri}/actualizar/info-empleado/`+`${id}`, obj)
        .subscribe(res => this.router.navigate(['empleados']));
   }

   getEmployee(id) {
    return this
            .http
            .get(`${this.uri}/empleado/${id}`);
    }

    deleteEmployee(id) {
      return this
                .http
                .get(`${this.uri}/borrar-empleado/${id}`);
    }

 }
