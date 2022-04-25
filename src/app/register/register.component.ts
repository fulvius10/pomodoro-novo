import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public confirmEmail: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public mensagem(name:string, email:string, confirmEmail:string, password:string,
    confirmPassword:string) {

      if (name == '' || email == ''|| confirmEmail == ''|| password == ''|| confirmPassword == '') {
        alert('Algum campo não foi preenchido, tente novamente!!');
      } else {
        alert('Registrado com sucesso');
      }
  }

}
