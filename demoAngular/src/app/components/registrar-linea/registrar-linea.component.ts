import { Component,OnInit } from '@angular/core';
import { Persona }    from "../../models/Persona";
import { LineaTelefonica }    from "../../models/LineaTelefonica";
import { RouterModule,Routes}     from "@angular/router";
import { ServicesService }    from "../../services/services.service";



@Component({
  selector: 'app-registrar-linea',
  templateUrl: './registrar-linea.component.html',
})
export class RegistrarLineaComponent implements OnInit {


  
 lineatelefonica:LineaTelefonica=new LineaTelefonica();

  constructor(private service:ServicesService,private router:RouterModule){}

  personas: Persona[];

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }
  
  persona:Persona=new Persona();
  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
    })
    console.log("paso por aca");
    
  
  }

 

}
