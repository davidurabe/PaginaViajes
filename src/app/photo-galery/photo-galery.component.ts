import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-galery',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './photo-galery.component.html',
  styleUrl: './photo-galery.component.scss'
})
export class PhotoGaleryComponent {
  photos = [
    { src: 'assets/Malzahar_0.jpg', alt: 'Malzahar', text:'heraldo del vacio'},
    { src: 'assets/swain.png', alt: 'swain', text:'poder sobre fuerza'},
    { src: 'assets/urabe.png', alt: 'urabe', text:'urabe :3'},
    { src: 'assets/', alt: '', text:''},
    { src: 'assets/', alt: '', text:''}
  ]

}
