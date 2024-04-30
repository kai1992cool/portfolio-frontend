import { Component, inject } from '@angular/core';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';
import { Router, RouterLink } from '@angular/router';
import { Item } from '../../interfaces/interface.item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [CardItemComponent, RouterLink],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  router = inject(Router);

  arrItems: Item[] = [];


  // itemsService = inject(ItemsService);

  // async ngOnInit() {
  //   this.arrItems = await this.itemsService.getAll();
  // }



}
