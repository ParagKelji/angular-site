import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active:string = 'login';
  firstName:string = "";
  lastName:string = "";
  login:string = "";
  password:string = "";
  

  onRegisterTab(): void {
    this.active = 'register';
  }
  
  onLoginTab(): void {
    this.active = 'login';
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName,
      "login": this.login, "password": this.password
    });
  }

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }
}
