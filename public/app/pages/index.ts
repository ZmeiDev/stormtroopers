import { CharacterComponent } from './characters/cahracter.component';
import { PageNotFoundComponent } from './page-not-fount/page-not-fount.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const pages = {
    pageNotFound: PageNotFoundComponent,
    characters: CharacterComponent,
    publications: PublicationsComponent,
    home: HomeComponent,
    login: LoginComponent,
    register: RegisterComponent
};
