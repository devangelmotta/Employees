import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  employees: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EmployeesService,
    private fb: FormBuilder) {
      this.createForm();
 }


 updateEmployee(name, salary, age, image) {
    this.route.params.subscribe(params => {
      console.log("edit.component")
      this.bs.updateEmployee(name, salary, age, image, params['id']);
      //this.router.navigate(['empleados']);
    });
 }

 createForm() {
  this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      employee_salary: ['', Validators.required ],
      employee_age: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("Params id: ", params['id'])
      this.bs.getEmployee(params['id']).subscribe((res: any) => {
        this.employees = res.dataEmployees;
    });
  });
  }

}
