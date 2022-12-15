import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';


@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color: number): string {
  
    if(color === 0){
      return 'rojo';
    }

    if(color === 1){
      return 'negro';
    }

    if(color === 2){
      return 'azul';
    }

    if(color === 3){
      return 'verde';
    }

    return '';

  }

}
