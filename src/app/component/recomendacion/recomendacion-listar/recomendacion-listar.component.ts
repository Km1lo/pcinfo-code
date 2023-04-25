import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Recomendacion } from 'src/app/model/recomendacion';
import { RecomendacionService } from 'src/app/service/recomendacion.service';

@Component({
  selector: 'app-recomendacion-listar',
  templateUrl: './recomendacion-listar.component.html',
  styleUrls: ['./recomendacion-listar.component.css']
})
export class RecomendacionListarComponent implements OnInit {
  dataSource:MatTableDataSource<Recomendacion>=new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  displayedColumns:string[]=['id','valoracion_user','notas_adicionales']


  constructor(private as:RecomendacionService){}
  ngOnInit(): void {
      this.as.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }
}
