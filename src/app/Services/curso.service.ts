import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  public cursos: Array<Curso> = [
    {
   
      id: 0,
      nome: 'Tempo de foco',
      
    },
    {
    
      id: 1,
      nome: 'Tempo de descanço',
     
    },
    {
     
      id: 2,
      nome: 'Tempo de intervalo',
      
    }
  ];

  constructor() { }

  public getAll(): Array<Curso> {
    return this.cursos;
  }

  public get(id: number): Curso {
    for (let obj of this.cursos) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Curso();
  }

  public add(curso: Curso) {
    curso.id = this.cursos.length;
    this.cursos.push(curso);
  }

  public edit(curso: Curso) {
    for(let obj of this.cursos) {
      if (curso.id === obj.id) {
        obj.nome = curso.nome;
      
        break;
      }
    }
  }

  public delete(id: number) {
    let posicao = 0;
    // for(let obj of this.cursos) {
    //   if (id === obj.id) {
    //     break;
    //   }
    //   posicao++;
    // }

    posicao = this.cursos.findIndex( (curso) => id === curso.id );

    this.cursos.splice(posicao, 1);

  }


}
