import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data: any[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    console.log("Token value: " + this.axiosService.getAuthToken());
    this.callFavoriteSports();
    //this.callMessages();
  }

  callMessages(): void {
    /*
    this.axiosService.axiosGet(
      "/messages/",
      null
    );
    */
    this.axiosService.request(
      "GET",
        "/messages/",
        {}
      ).then(
        (response) => {
          this.data = response.data
          console.log(this.data);
        }
      ).catch(
        (reason) => {
          console.log("Failed due to: " + reason);
          this.data[0] = reason;
    });
  }
  
  callFavoriteSports(): void {
    this.axiosService.request(
      "GET",
        "/favoritesports?token=" + this.axiosService.getAuthToken(),
        {}
      ).then(
        (response) => {
          this.data = response.data
          console.log(this.data);
        }
      ).catch(
        (reason) => {
          console.log("Failed due to: " + reason);
          this.data[0] = reason;
    });
  }
}
