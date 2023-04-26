import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';
//Creamos el const base_url=environment para que nos deje usar el const base_url=environment en el servicio de usuario
//Aumaticamente nos crea el import { environment } from 'src/environments/environment';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //Creamos el private url=`${base_url}/usuario` para que nos deje usar el private url=`${base_url}/usuario`
  private url=`${base_url}/usuario`

  private listacambio = new Subject<Usuario[]>();

  constructor(private http:HttpClient) {}
  list(){
    return this.http.get<Usuario[]>(this.url);
  }


  registrar(usuario:Usuario){
    return this.http.post(this.url,usuario);
  }

  setLista(listaNueva:Usuario[]){
    this.listacambio.next(listaNueva);
  }

  getLista(){
    return this.listacambio.asObservable();
  }

}
