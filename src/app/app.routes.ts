import { provideRouter, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { HeaderComponent } from './header/header.component';



export const routes: Routes = [
    {path: '', redirectTo: '/body', pathMatch:'full'},
    {path: 'body', component: BodyComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'photo-galery', component: PhotoGaleryComponent},
    {path: 'header', component: HeaderComponent}

    
];
export const appRoutingProviders = [ provideRouter(routes)]
