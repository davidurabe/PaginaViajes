import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './home/about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent,
  AboutUsComponent,
CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PaginaViajes';
}
