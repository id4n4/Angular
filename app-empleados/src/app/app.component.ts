import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';
  empleados : Empleado[] = [
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Maria","Valencia","Directora",7500),
    new Empleado("Jose","Sanchez","Jefe de Sección",7000),
    new Empleado("Andruth", "Polo", "Administrativo", 7000),
  ]
  inputName: string = "";
  inputLastName: string = "";
  inputJob: string = "";
  inputSalary: number = 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.inputName, this.inputLastName, this.inputJob, this.inputSalary)
    this.empleados.push(miEmpleado)
  }
}
