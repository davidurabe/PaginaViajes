import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent,
  PhotoGaleryComponent,
CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'PaginaViajes';
  ; constructor(private router: Router, private route: ActivatedRoute)
   {} ngOnInit() { this.router.events.subscribe(event => { if (event instanceof NavigationEnd) 
    { const fragment = this.route.snapshot.fragment; if (fragment) 
      { document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' }); } } }); }
       ngAfterViewInit() { this.route.fragment.subscribe(fragment => { if (fragment)
         { document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' }); } }); } }

