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
    { src: 'assets/tafi-edicion.jpg', alt: 'Malzahar', text:'heraldo del vacio'},
    { src: 'assets/tafi-foto1.jpg', alt: 'swain', text:'poder sobre fuerza'},
    { src: 'assets/tafi-foto2.jpg', alt: 'urabe', text:'urabe :3'},
   
  ]
  photos2 = [
    { src: 'assets/bariloche1.jpg', alt: 'Bariloche', text:'bariloche' },
    { src: 'assets/bariloche2.jpg', alt: 'bariloche', text:''},
    { src: 'assets/bariloche3.jpg', alt: 'bariloche', text:''},
    { src: 'assets/bariloche4.jpg', alt: 'bariloche', text:''},
   
  ]
  photos3 = [
    { src: 'assets/vacija-secreta1.jpg', alt: 'Malzahar', text:'heraldo del vacio'},
    { src: 'assets/estanciamgadalena2.jpg', alt: 'swain', text:'poder sobre fuerza'},
    { src: 'assets/estanciamgadalena3.jpg', alt: 'urabe', text:'urabe :3'},
   
  ]

}
