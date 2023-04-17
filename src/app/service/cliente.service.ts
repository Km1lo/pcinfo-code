import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';


const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url=`${base_url}/cliente`
  constructor(private htttp:HttpClient) { }
  list(){
    return this.htttp.get<Cliente[]>(this.url);
  }
}
