import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { DelEmployeesComponent } from './del-employees/del-employees.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: 'nuevo-empleado',
    component: CreateEmployeesComponent
  },
  {
    path: 'borrar-empleado',
    component: DelEmployeesComponent
  },
  {
    path: 'empleados',
    component: GetEmployeesComponent
  },
  {
    path: 'empleados/actualizar-informacion/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
