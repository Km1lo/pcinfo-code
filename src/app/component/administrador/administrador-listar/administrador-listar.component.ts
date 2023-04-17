import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-administrador-listar',
  templateUrl: './administrador-listar.component.html',
  styleUrls: ['./administrador-listar.component.css']
})
export class AdministradorListarComponent implements OnInit {
  dataSource:MatTableDataSource<Administrador> = new MatTableDataSource();


  //crear un displayColumns de la entidad administrador llamando el atributo id de la entidad usuarios
  displayedColumns: string[] = ['id_admin', 'usuario_id' ,'profesion', 'area_trabajo', 'horario', 'cumpleanos', 'estado_vacaciones', 'estado_contrato']

  constructor(private aS:AdministradorService) { }
  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }
}
