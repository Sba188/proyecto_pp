import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { VueloComponent } from './pages/vuelo/vuelo.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { ServicioComponent } from './pages/servicio/servicio.component';


@NgModule({
  declarations: [
    VueloComponent,
    HotelComponent,
    ActividadComponent,
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule
  ],
  exports:[
    ServicioComponent,
    VueloComponent,
    HotelComponent,
    ActividadComponent
  ]
})
export class ServicioModule { }
