import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/item.interface';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  @Input() item: Item | null = null;

  itemsService = inject(ItemsService);

}
