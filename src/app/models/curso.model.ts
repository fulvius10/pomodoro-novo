export class Curso {

  public id: number;
  public nome: string;


  constructor()
  constructor(
    id ? : number,
    nome ? : string,

  ) {


    this.id = id ? id : 0;
    this.nome = nome ? nome : '';


  }
}