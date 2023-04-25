import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Componente } from 'src/app/model/componente';
import { ComponenteService } from 'src/app/service/componente.service';

@Component({
  selector: 'app-componente-listar',
  templateUrl: './componente-listar.component.html',
  styleUrls: ['./componente-listar.component.css']
})
export class ComponenteListarComponent implements OnInit {

  dataSource:MatTableDataSource<Componente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  displayedColumns:string[]=['id_componente','id',
  'marca','puntaje','descripcion','generacion',
  'nombre_producto','litografia','precio_recomend',
  'velocidad_memoriaram','tipo_chipseet','compatabilidad'
  ,'tipo_mmr','velocidad_reloj_gpu','tmn_ram','tmn_placa_madre'
  ,'zocalo','tmn_memoria','tipo_almacenamiento',
  'tipo_fuente','color','tamano','certificacion',
  'vatios','sistema_modular','veloc_escrit','veloc_lect'
];

  constructor(private as:ComponenteService){}
  ngOnInit(): void {
      this.as.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }

}
