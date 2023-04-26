import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Recomendacion } from 'src/app/model/recomendacion';
import { RecomendacionService } from 'src/app/service/recomendacion.service';
import { MatDialog } from '@angular/material/dialog'
import { RecomendacionDialogoComponent } from './recomendacion-dialogo/recomendacion-dialogo.component';

@Component({
  selector: 'app-recomendacion-listar',
  templateUrl: './recomendacion-listar.component.html',
  styleUrls: ['./recomendacion-listar.component.css']
})
export class RecomendacionListarComponent implements OnInit {
  lista:Recomendacion[]=[]
  dataSource:MatTableDataSource<Recomendacion>=new MatTableDataSource();
  idMayor: number = 0

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  displayedColumns:string[]=['id','valoracion_user','notas_adicionales','acciones1','acciones2']


  constructor(private as:RecomendacionService,private dialog:MatDialog){}
  ngOnInit(): void {
      this.as.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })

      this.as.getList().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })

      this.as.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(RecomendacionDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
}
