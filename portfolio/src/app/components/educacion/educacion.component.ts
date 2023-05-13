import { Component, OnInit, Input, Output } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged=false
  @Input () educacion:Educacion=new Educacion("","","","");
 
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      }else{
        this.isLogged=false;
      }

  }
    }