import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.url;

@Pipe({
  name: 'mostrarImagen'
})
 export class MostrarImagenPipe implements PipeTransform {

  transform(imagenAviso: any, usuarioId: string): string {
    return `${url}/avisos/imagenAviso/${usuarioId}/${imagenAviso}`;
  }

}
