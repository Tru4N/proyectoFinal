import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductopcComponent } from './components/productopc/productopc.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'productoPc', component: ProductopcComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ofertas', component: OfertasComponent},  
  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
