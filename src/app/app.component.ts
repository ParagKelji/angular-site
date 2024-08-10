import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, Input  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ContentTraverseComponent } from "./content-traverse/content-traverse.component";
import { Form } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { first, last } from 'rxjs';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, HeaderComponent, AuthContentComponent, FormsModule, WelcomeContentComponent, ContentTraverseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-site';
  
}
