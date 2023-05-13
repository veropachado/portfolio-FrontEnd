import { Component, OnInit,Input, Output } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  isLogged=false
  @Input () persona:Persona= new Persona("","","","","","","","");
  
  constructor (private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
   }
  }
  
  }