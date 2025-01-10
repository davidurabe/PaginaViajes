import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { BodyComponent } from './home/viajes/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutUsComponent,
    CommonModule,
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PaginaViajes';
}
