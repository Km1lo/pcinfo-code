import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';


@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent implements OnInit{
  dataSource:MatTableDataSource<Reporte> = new MatTableDataSource();

  displayedColumns: string[] = ['id_reporte', 'id_admin', 'descripcion', 'fecha', 'estado']




  constructor(private aS:ReporteService) { }
  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
