import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private basUrl = "http://localhost:8080/usuario"
  constructor(private httpClient:HttpClient){}
  
     getUsuarioList():Observable<Usuario[]>{
      return this.httpClient.get<Usuario[]>(`${this.basUrl}`);
    }
    
    createUsuario(usuario:Usuario):Observable<Object>{
      return this.httpClient.post<Usuario[]>(`${this.basUrl}`,usuario);
    }
    
    getUsuarioById(id:number):Observable<Usuario>{
      return this.httpClient.get<Usuario>(`${this.basUrl}/${id}`);      
    }
    
    updateUsuario(id:number, usuario:Usuario):Observable<Object>{
      return this.httpClient.put<Usuario[]>(`${this.basUrl}/${id}`,usuario);      
      
    }
    
    deleteUsuario(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.basUrl}/${id}`);      
    }
    
  }

