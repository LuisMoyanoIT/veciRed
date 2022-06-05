import { MostrarImagenPipe } from './mostrar-imagen.pipe';
import { NgModule } from "@angular/core";
import { ImagenAcuerdoPipe } from './imagen-acuerdo.pipe';


@NgModule({
    declarations:[
        MostrarImagenPipe,
        ImagenAcuerdoPipe
    ],
    exports:[
        MostrarImagenPipe,
        ImagenAcuerdoPipe

    ]

})

export class PipesModule {}