import { Component, OnInit, Input } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';

@Component({
  
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  @Input () habilidad:Habilidad=new Habilidad("",0);
 
  constructor() { }

  ngOnInit(): void {
  }

}