import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recomendacion } from '../model/recomendacion';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {
  private url=`${base_url}/recomendacion`
  private listaCambio=new Subject<Recomendacion[]>()
  private confirmarEliminacion = new Subject<boolean>()

  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Recomendacion[]>(this.url);
  }

  listId(id:number){
    return this.http.get<Recomendacion>(`${this.url}/${id}`);
  }
  update(rep: Recomendacion){
    return this.http.put(this.url+"/"+rep.id, rep);
  }
  insert(reporte : Recomendacion){
    return this.http.post(this.url, reporte);
  }
 setList(listaNueva: Recomendacion[]) {
  this.listaCambio.next(listaNueva);
  }
  getList() {
  return this.listaCambio.asObservable();
  }


  delete(id: number) {
  return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
  return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:boolean){
  this.confirmarEliminacion.next(estado);
  }
}
