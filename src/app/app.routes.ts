import { Routes } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'list', component: ListItemsComponent }
];
