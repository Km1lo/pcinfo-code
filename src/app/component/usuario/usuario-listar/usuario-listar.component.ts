import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();

  //paginator
  @ViewChild(MatPaginator) paginator!:MatPaginator;


  displayedColumns:string[]=['id','dni','nombre','apellidoPaterno','apellidoMaterno','correo','sexo','edad','contrasenia','pais']

  constructor(private aS:UsuarioService){}
  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }




}
