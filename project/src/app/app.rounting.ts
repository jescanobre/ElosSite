import { HomeComponent } from './home/home.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { StoreComponent } from './store/store.component';
import { PersonagemDetalheZonzoComponent } from './personagem-detalhe-zonzo/personagem-detalhe-zonzo.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'perfilpersonagemlimonada', component: PersonagemDetalheComponent},
    {path: 'perfilpersonagemzonzo', component: PersonagemDetalheZonzoComponent},
    {path: 'loja', component: StoreComponent}
    // {path: 'login', component: LoginComponent},
    // {path: 'cadastro', component: CadastroComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);