import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarLineaComponent } from "./components/registrar-linea/registrar-linea.component";
import {ConsultarFacturasComponent} from "./components/consultar-facturas/consultar-facturas.component"

const routes: Routes = [
  { path: 'RegistroLinea', component: RegistrarLineaComponent },
  { path: 'ConsultarFacturas', component: ConsultarFacturasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrarLineaComponent,ConsultarFacturasComponent]