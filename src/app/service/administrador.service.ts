import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Administrador } from '../model/administrador';



const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url=`${base_url}/administrador`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Administrador[]>(this.url);
  }
}

