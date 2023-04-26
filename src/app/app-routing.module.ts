import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteRegistrarComponent } from './component/cliente/cliente-registrar/cliente-registrar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorRegistrarComponent } from './component/administrador/administrador-registrar/administrador-registrar.component';
import { ComponenteComponent } from './component/componente/componente.component';
import { ComponenteRegistrarComponent } from './component/componente/componente-registrar/componente-registrar.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReporteRegistrarComponent } from './component/reporte/reporte-registrar/reporte-registrar.component';
import { RecomendacionComponent } from './component/recomendacion/recomendacion.component';
import { RecomendacionRegistrarComponent } from './component/recomendacion/recomendacion-registrar/recomendacion-registrar.component';

const routes: Routes = [
  {
    path: 'usuarios', component: UsuarioComponent, children: [
    ]
  },
  {
    path: 'clientes', component: ClienteComponent, children: [
      {
        path: 'registrar', component: ClienteRegistrarComponent
      },
      {
        path: 'editar/:id', component: ClienteRegistrarComponent
      }
    ]
  },
  {
    path: 'administradores', component: AdministradorComponent, children: [
      {
        path: 'registrar', component: AdministradorRegistrarComponent
      },
      {
        path: 'editar/:id', component: AdministradorRegistrarComponent
      }
    ]
  },
  {
    path: 'componentes', component: ComponenteComponent, children: [
      {
        path: 'registrar', component: ComponenteRegistrarComponent
      },
      {
        path: 'editar/:id', component: ComponenteRegistrarComponent
      }
    ]
  },
  {
    path: 'reportes', component: ReporteComponent, children: [
      {
        path: 'registrar', component: ReporteRegistrarComponent
      },
      {
        path: 'editar/:id', component: ReporteRegistrarComponent
      }
    ]
  },
  {
    path: 'recomendacion', component: RecomendacionComponent, children: [
      {
        path: 'registrar', component: RecomendacionRegistrarComponent
      },
      {
        path: 'editar/:id', component: RecomendacionRegistrarComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
