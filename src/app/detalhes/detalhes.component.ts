import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from "src/app/Services/curso.service";
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  public cursos: Array<Curso> = [];
  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoServ.getAll();
  }

}
