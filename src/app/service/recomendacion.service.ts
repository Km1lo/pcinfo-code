import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recomendacion } from '../model/recomendacion';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {
  private url=`${base_url}/recomendacion`

  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Recomendacion[]>(this.url);
  }
}
