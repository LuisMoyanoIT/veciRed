import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;


@Pipe({
  name: 'imagenAcuerdo'
})
export class ImagenAcuerdoPipe implements PipeTransform {

  transform(img: string, userId: string): string {
    return `${URL}/acuerdos/imagenAcuerdo/${userId}/${img}`;
  }

}
