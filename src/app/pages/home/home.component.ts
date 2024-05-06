import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ListItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
