import { Component } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {


  /* i18nSelect */
  nombre: string = 'Daniel';
  genero: string = 'masculino';

  /* Objeto que va a servir como mapping para el pipe i18select, el mapping es un parametro obligatorio para el pipe */
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /* i18nPlural */

  clientes: string[] = ['Maria', 'Pedro', 'Daniel', 'Juan', 'Alberto'];
  
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes espeando.'
  }

  cambiarCliente(){
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  addClient(){
    this.clientes.unshift('');
    
  }

  borrarCliente(){
    this.clientes.pop();
  }

  limpiarLista(){
    this.clientes = [];
  }

  /* KeyValue Pipe */

  persona = {
    nombre: 'Daniel',
    edad: 35,
    direccion: 'Estado de México, México'
  }

  /* JSON Pipe */

  heroes = [
    {
      nombre: 'Superman',
      vuela:  true,

    },
    {
      nombre: 'Robin',
      vuela:  false,

    },
    {
      nombre: 'Aquaman',
      vuela:  false,

    },
  ];

  /* Async pipe */

  miObservable = interval(5000); //0,1,2,3,4,5,6,7...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('Tenemos data de promesa')

    }, 3500);
  });



}
