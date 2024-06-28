import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
    { path:'', component:HomepageComponent},
    {path:'auth',component:LoginPageComponent}
];
