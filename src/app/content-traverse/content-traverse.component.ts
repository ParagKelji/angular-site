import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ButtonsComponent } from "../buttons/buttons.component";
import { WelcomeContentComponent } from "../welcome-content/welcome-content.component";
import { AuthContentComponent } from "../auth-content/auth-content.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-traverse',
  standalone: true,
  imports: [LoginFormComponent, CommonModule, WelcomeContentComponent, ButtonsComponent, AuthContentComponent],
  templateUrl: './content-traverse.component.html',
  styleUrl: './content-traverse.component.css'
})
export class ContentTraverseComponent {

  componentToShow:string = "welcome";

  constructor(private axiosService: AxiosService) {}
  
  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = 'messages';
    })
  }

  onRegister(input: any): void {
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = 'messages';
    })
  }
}
