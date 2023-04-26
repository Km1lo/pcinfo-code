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
import { UsuarioLoginComponent } from './component/usuario/usuario-login/usuario-login.component';
import { ClienteRegistrarComponent } from './component/cliente/cliente-registrar/cliente-registrar.component';
import { AdministradorRegistrarComponent } from './component/administrador/administrador-registrar/administrador-registrar.component';
import { ComponenteRegistrarComponent } from './component/componente/componente-registrar/componente-registrar.component';
import { ReporteRegistrarComponent } from './component/reporte/reporte-registrar/reporte-registrar.component';
import {MatMenuModule} from '@angular/material/menu';
import { RecomendacionComponent } from './component/recomendacion/recomendacion.component';
import { RecomendacionListarComponent } from './component/recomendacion/recomendacion-listar/recomendacion-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
//import { RecomendacionRegistrarComponent } from './component/recomendacion/recomendacion-registrar/recomendacion-registrar.component';
//import { RecomendacionDialogoComponent } from './component/recomendacion/recomendacion-listar/recomendacion-dialogo/recomendacion-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog'
import { from } from 'rxjs';
//import { RecomendacionRegistrarComponent}

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
    ComponenteListarComponent,
    UsuarioLoginComponent,
    ClienteRegistrarComponent,
    AdministradorRegistrarComponent,
    ComponenteRegistrarComponent,
    ReporteRegistrarComponent,
    RecomendacionComponent,
    RecomendacionListarComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
