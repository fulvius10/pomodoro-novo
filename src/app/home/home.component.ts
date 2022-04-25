import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from "src/app/Services/curso.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cursos: Array<Curso> = [];

  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoServ.getAll();
  }

}
