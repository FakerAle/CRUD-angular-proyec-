import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http" ;
import { Persona }    from "../models/Persona";
import { LineaTelefonica }    from "../models/LineaTelefonica";

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) {
    console.log("service on");
    
   }
  Url="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/registrarPersona";
  Url2="http://localhost:8080/CRUD_API_REST_JPA/Rest/PruebaOrrego/listadoLibros";

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonas(){
    return this.http.get<Persona[]>(this.Url2);
  }
  

}
