import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reporte } from '../model/reporte';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url=`${base_url}/reporte`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Reporte[]>(this.url);
  }
  listId(id:number){
    return this.http.get<Reporte>(`${this.url}/${id}`);
  }
  update(rep: Reporte){
    return this.http.put(this.url+"/"+rep.id, rep);
  }
  insert(reporte : Reporte){
    return this.http.post(this.url, reporte);
 }

}
