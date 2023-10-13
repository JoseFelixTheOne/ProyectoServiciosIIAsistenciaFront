import { Component } from '@angular/core';
import { SeccionModule } from '../seccion.module';
import { Seccion } from '../interface/Seccion';
import { SeccionService } from '../seccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-seccion',
  templateUrl: './tabla-seccion.component.html',
  styleUrls: ['./tabla-seccion.component.css']
})
export class TablaSeccionComponent {

  constructor(private seccionService:SeccionService,private router:Router){

  }
  get secciones():Seccion[]{
    return this.seccionService.secciones
  }

  editar(idseccion:number){
    this.router.navigate(["seccion/editar/"+idseccion])

  }


}
