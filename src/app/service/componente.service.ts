import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Componente } from '../model/componente';


const base_url=environment.base


@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  private url=`${base_url}/componente`

  constructor(private http:HttpClient)
  {
  }
    list()
    {
      return this.http.get<Componente[]>(this.url);
    }
}
