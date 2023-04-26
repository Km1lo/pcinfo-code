import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recomendacion } from 'src/app/model/recomendacion';
import * as moment from 'moment';
import { ReporteService } from 'src/app/service/reporte.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecomendacionService } from 'src/app/service/recomendacion.service';

@Component({
  selector: 'app-recomendacion-registrar',
  templateUrl: './recomendacion-registrar.component.html',
  styleUrls: ['./recomendacion-registrar.component.css']
})
export class RecomendacionRegistrarComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  recomendacion:Recomendacion=new Recomendacion();
  mensaje:string="";
  maxFecha:Date=moment().add(1,'days').toDate();
  id:number=0;
  edicion:boolean=false;

  constructor(
    private RecomendacionService: RecomendacionService,
    private router: Router,
    private route: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
    this.form=new FormGroup({
      id:new FormControl(),
      valoracion_user:new FormControl(),
      notas_adicionales:new FormControl()

    })
  }


  init(){
    if(this.edicion){
      this.RecomendacionService.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          valoracion_user:new FormControl(data.valoracion_user),
          notas_adicionales: new FormControl(data.notas_adicionales)
        });
      });
    }
  }
  aceptar(): void {
    this.recomendacion.id = this.form.value['id'];
    this.recomendacion.valoracion_user = this.form.value['valoracion_user'];
    this.recomendacion.notas_adicionales = this.form.value['notas_adicionales'];
     if (
      this.form.value['notas_adicionales'].length > 0
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.RecomendacionService.update(this.recomendacion).subscribe((data) =>
          this.router.navigate(['recomendacion']).then(() => {
            window.location.reload();
          })
        );
      } else {
        //registrarlo en la base de  datos
        this.RecomendacionService.insert(this.recomendacion).subscribe((data) =>
          this.router.navigate(['recomendacion']).then(() => {
            window.location.reload();
          })
        );
      }
      this.router.navigate(['recomendacion']);
    } else {
      this.mensaje = 'Ingrese la descripcion o estado';
    }
  }




}
