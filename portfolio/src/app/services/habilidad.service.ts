import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Habilidad } from '../models/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private apiUrl:string='https://backendvp.onrender.com/habilidades/';

  constructor(private http:HttpClient) { }

  public lista():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.apiUrl+'traer');
  }
  public detalle(id:number):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.apiUrl+ `detail/${id}`);
  }

}