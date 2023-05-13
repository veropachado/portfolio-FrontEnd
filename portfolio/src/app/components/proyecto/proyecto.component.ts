import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto:Proyecto=new Proyecto("","","","","");
 
  constructor() { }

  ngOnInit(): void {
  }

}