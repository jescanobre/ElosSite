import { HomeComponent } from './home/home.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { StoreComponent } from './store/store.component';
// <<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

// =======
// import { PersonagemDetalheZonzoComponent } from './personagem-detalhe-zonzo/personagem-detalhe-zonzo.component';
// >>>>>>> master
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
// <<<<<<< HEAD
    {path: 'perfilpersonagem', component: PersonagemDetalheComponent},
    {path: 'loja', component: StoreComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
// =======
//     {path: 'perfilpersonagemlimonada', component: PersonagemDetalheComponent},
//     {path: 'perfilpersonagemzonzo', component: PersonagemDetalheZonzoComponent},
//     {path: 'loja', component: StoreComponent}
//     // {path: 'login', component: LoginComponent},
//     // {path: 'cadastro', component: CadastroComponent}, 
// >>>>>>> master
];

export const routing = RouterModule.forRoot(APP_ROUTES);