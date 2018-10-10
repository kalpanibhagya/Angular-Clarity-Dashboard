import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ProfileComponent } from './profile/profile.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'buttons', component: ButtonsComponent},
   { path: 'cards', component: CardsComponent},
   { path: 'profile', component: ProfileComponent},
   { path: 'tables', component: TablesComponent},
   { path: 'icons', component: IconsComponent},
   { path: '', component: HomeComponent},
   { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
