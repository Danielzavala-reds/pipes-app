import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  
  title = '04-pipesApp';
  nombre: string = 'DaNiel AlbeRto'
  valor: number = 1000
  obj = {
    nombre: 'DaNiel AlbeRto'
  }

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrarNombre(){
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }

}
