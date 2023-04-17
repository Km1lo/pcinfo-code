import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorListarComponent } from './component/administrador/administrador-listar/administrador-listar.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReporteListarComponent } from './component/reporte/reporte-listar/reporte-listar.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { ComponenteComponent } from './component/componente/componente.component';
import { ComponenteListarComponent } from './component/componente/componente-listar/componente-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    AdministradorComponent,
    AdministradorListarComponent,
    ReporteComponent,
    ReporteListarComponent,
    ClienteComponent,
    ClienteListarComponent,
    ComponenteComponent,
    ComponenteListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
