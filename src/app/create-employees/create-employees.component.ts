import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: EmployeesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      employee_salary: ['', Validators.required ],
      employee_age: ['', Validators.required ]
    });
  }

  addEmployee(employee_name, employee_salary, employee_age) {
    this.bs.addEmployee(employee_name, employee_salary, employee_age);
  }

  ngOnInit() {
  }

}
