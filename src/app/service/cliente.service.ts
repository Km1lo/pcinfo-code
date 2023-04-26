import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { Usuario } from '../model/usuario';


const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url=`${base_url}/cliente`
  private listacambio = new Subject<Cliente[]>();


  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Cliente[]>(this.url);
  }

  registrar(cliente:Cliente){
    return this.http.post(this.url,cliente);
  }

  setLista(listaNueva:Cliente[]){
    this.listacambio.next(listaNueva);
  }

  getLista(){
    return this.listacambio.asObservable();
  }



}
