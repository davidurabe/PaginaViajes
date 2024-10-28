import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html', 
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  photos = [
    { src: 'assets/Malzahar_0.jpg', alt: 'Malzahar', text:'heraldo del vacio'},
    { src: 'assets/swain.png', alt: 'swain', text:'poder sobre fuerza'},
    { src: 'assets/urabe.png', alt: 'urabe', text:'urabe :3'},
   
  ]

}
