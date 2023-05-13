import { Component, OnInit, Input ,Output} from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-experiencia-edit',
  templateUrl: './modal-experiencia-edit.component.html',
  styleUrls: ['./modal-experiencia-edit.component.css']
})
export class ModalExperienciaEditComponent implements OnInit {
  @Input() title="";

  experiencia:Experiencia=new Experiencia("","","","","");

  constructor(private datosExperiencia:ExperienciaService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosExperiencia.detalle(id).subscribe(
      data=>{
        this.experiencia=data;
      }, err =>{
        alert("Error al actualizar experiencia");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosExperiencia.updateExperiencia(id,this.experiencia).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al actualizar experiencia");
      this.router.navigate(['']);
    }
    )
  }

   closeModal(){
    this.router.navigate(['']);
  }
}