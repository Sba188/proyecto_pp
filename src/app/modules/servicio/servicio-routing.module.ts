import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioModule } from './servicio.module';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { VueloComponent } from './pages/vuelo/vuelo.component';
import { ServicioComponent } from './pages/servicio/servicio.component';

const routes: Routes = [
  {
    path: "servicios", component: ServicioComponent
  },
  {
    path: "actividades", component: ActividadComponent
  },
  {
    path: "hoteles", component: HotelComponent
  },
  {
    path: "vuelos", component: VueloComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
