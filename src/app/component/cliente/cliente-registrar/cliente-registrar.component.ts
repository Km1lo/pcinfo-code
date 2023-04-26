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

  aceptar(): void{}


}
