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
    { src: 'assets/bariloche1.jpg', alt: 'Malzahar', text:'heraldo del vacio'},
    { src: 'assets/bariloche2.jpg', alt: 'swain', text:'poder sobre fuerza'},
    { src: 'assets/bariloche3.jpg', alt: 'urabe', text:'urabe :3'},
    { src: 'assets/bariloche4.jpg', alt: 'urabe', text:'urabe :3'},
   
  ]

}
