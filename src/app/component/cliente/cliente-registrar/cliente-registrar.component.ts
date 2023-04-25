import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styleUrls: ['./cliente-registrar.component.css']
})

export class ClienteRegistrarComponent implements OnInit {
  formC: FormGroup = new FormGroup({});
  formU: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  usuario: Usuario = new Usuario();
  mensaje: string = '';

  ngOnInit(): void {
    this.formC= new FormGroup({
      id_cliente: new FormControl(),
      estado_actividad: new FormControl(),
      presupuesto: new FormControl(),
      preferencias: new FormControl(),
      tipo_pcs: new FormControl(),
    })

    this.formU= new FormGroup({
      id: new FormControl(),
      dni: new FormControl(),
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      correo: new FormControl(),
      sexo: new FormControl(),
      edad: new FormControl(),
      contrasenia: new FormControl(),
      pais: new FormControl(),
    })
  }

  constructor(private cS:ClienteService, private uS:UsuarioService, private router:Router) { }

  aceptar(): void{
    this.cliente.id_cliente = this.formC.value['id_cliente'];
    this.usuario.id = this.formU.value['id'];
    this.usuario.dni = this.formU.value['dni_usuario'];
    this.usuario.nombre = this.formU.value['nombre_usuario'];
    this.usuario.apellidoPaterno = this.formU.value['apellidoPaterno_usuario'];
    this.usuario.apellidoMaterno = this.formU.value['apellidoMaterno_usuario'];
    this.usuario.correo = this.formU.value['correo_usuario'];
    this.usuario.sexo = this.formU.value['sexo_usuario'];
    this.usuario.edad = this.formU.value['edad_usuario'];
    this.usuario.contrasenia = this.formU.value['contrania_usuario'];
    this.usuario.pais = this.formU.value['pais_usuario'];

    this.cliente.estado_actividad = this.formC.value['estado_actividad'];
    this.cliente.presupuestos = this.formC.value['presupuesto'];
    this.cliente.preferencias = this.formC.value['preferencias'];
    this.cliente.tipo_pcs = this.formC.value['tipo_pcs'];



    if(this.formC.value['estado_actividad'].length>0){
      this.cS.registrar(this.cliente).subscribe(data=>{
        this.cS.list().subscribe(cliente=>{
          this.cS.setLista(cliente);
        })
      })
      this.router.navigate(["clientes"]);
    }
    if(this.formU.value['apellidoMaterno_usuario'].length>0){
      this.uS.registrar(this.usuario).subscribe(data=>{
        this.uS.list().subscribe(usuario=>{
          this.uS.setLista(usuario);
        })
      })


    }else {
      this.mensaje = 'Debe llenar todos los campos';
    }
  }

}
