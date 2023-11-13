import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: '', component: HomepageComponent
    },
    {
        path: 'character/:id', component: CharacterDetailsComponent
    },
];
