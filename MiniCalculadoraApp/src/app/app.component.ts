import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: Number = 0;

  suma(): void {
    console.log("funciona")
    this.resultado = this.numero1 + this.numero2;
  }
  resta(): void {
    console.log("funciona")
    this.resultado = this.numero1 - this.numero2;
  }
}
