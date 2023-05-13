import { Component, OnInit, Input, Output } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  isLogged=false
  @Input () experiencia:Experiencia=new Experiencia("","","","","");
    
  constructor( private tokenService:TokenService) { }
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      }else{
        this.isLogged=false;
      }
       }

  }