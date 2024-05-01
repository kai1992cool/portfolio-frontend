import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../interfaces/interface.item';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  router = inject(Router);

  arrItems: Item[] = [];
  //   export interface Item {
  //     id: number;
  //     organization: string;
  //     title: string;
  //     stDate: string;
  //     endDate: string;
  //     description: string;
  //     categoryTitle: string
  // }


  itemsService = inject(ItemsService);
  // itemsService -> getAll

}
