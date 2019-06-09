import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Employees from '../models/Employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {

  employees: Employees[];

  constructor(
    private bs: EmployeesService,
    private route: ActivatedRoute,
    private router: Router ) { }

  deleteEmployee(id) {
    this.bs.deleteEmployee(id).subscribe(res => {
      this.router.navigate(['empleados']);
    });
  }

  ngOnInit() {
    this.bs
      .getEmployees()
      .subscribe((data: any) => {
        this.employees = data.dataEmployees;

    });
 
  }

}
