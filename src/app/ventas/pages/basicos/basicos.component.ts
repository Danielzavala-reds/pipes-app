import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'daniel';
  nombreUpper: string = 'DANIEL';
  nombreCompleto: string = 'DaNiEl AlBerTo';

  fecha: Date = new Date(); /* Fecha del día de hoy */

}
