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
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request("GET","/messages",[])
    .then(
      (response) => this.data = response.data
    );
  }
}
