import { HomeComponent } from './home/home.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';


import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'perfilpersonagem', component: PersonagemDetalheComponent}
    // {path: 'login', component: LoginComponent},
    // {path: 'cadastro', component: CadastroComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);