import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource:MatTableDataSource<Cliente> = new MatTableDataSource();

  //crear un displayColumns de la entidad cliente llamando el atributo id de la entidad usuarios
  displayedColumns: string[] = ['id', 'usuario_id' ,'estado_actividad', 'presupuestos', 'preferencias', 'tipo_pcs']

  constructor(private cS:ClienteService) { }
  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
