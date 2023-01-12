import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Registro de usuarios'
  nombre : string = ""
  apellido : string = ""
  registrado : boolean = false
  mensaje : string = ""
  entradas: Array<{titulo:string}>;

  constructor(){
    this.entradas = [
      {titulo: "Python cada día más presente"},
      {titulo: "Java presente desde hace más de 20 años"},
      {titulo: "Javascript cada vez más funcional"},
      {titulo: "Kotlin potencia para tus apps"},
      {titulo: "¿Dónde quedó pascal? "}
    ]
  }


  registrarUsuario(){
    this.registrado = true
    this.mensaje = "Usuario Registrado con éxito"
  }
}
