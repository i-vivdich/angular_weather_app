import { AddComponent } from './add/add.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: CitiesComponent },
      { path: 'add', component: AddComponent }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  { path: '**', redirectTo: '' } // temporary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
