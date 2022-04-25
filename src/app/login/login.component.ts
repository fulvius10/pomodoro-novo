import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public mensagem(x:string, y:string) {
    if (x == '' || y == '') {
      alert('Algum campo não foi preenchido, tente novamente!!');
    } else {
      alert('Login efetuado com sucesso!');
    }
  }

}
