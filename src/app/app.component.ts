import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent,
  PhotoGaleryComponent,
CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PaginaViajes';
}
