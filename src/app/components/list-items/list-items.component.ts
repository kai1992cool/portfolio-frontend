//----------- LIST ITEMS -----------//

import { Component, inject } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';
import { Router, RouterLink } from '@angular/router';
import { Item } from '../../interfaces/item.interface';
import { Category } from '../../interfaces/category.interface';
import { CategoriesService } from '../../services/categories.service';
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

  //----------- DATA-----------//
  categories: Category[] = [];
  allCategories: Item[] = [];
  itemsByCategory: { [categoryTitle: string]: Item[] } = {};
  arrItems: Item[] = [];
  category: Item | null = null;
  item: Item | null = null;


  //----------- SERVICES-----------//
  categoriesService = inject(CategoriesService);
  itemsService = inject(ItemsService);
  Object: any;


  //----------- NG-ON-INIT -----------//
  ngOnInit() {
    // ALL ITEMS
    this.itemsService.getAll().subscribe((res: Item[]) => {
      this.arrItems = res;
      this.allCategories = res;


    // CATEGORIES WITH ITEMS
    this.arrItems.forEach(item => {
      const categoryTitle = item.categoryTitle;
      if (!this.itemsByCategory[categoryTitle]) {
        this.itemsByCategory[categoryTitle] = [];
      }
      this.itemsByCategory[categoryTitle].push(item);
    });

    console.log(this.itemsByCategory);
    // ​---------------------------------------------
    // Object { Projects: (5) […], Experience: (3) […], Education: (3) […], Certifications: (2) […] }
    // ​---------------------------------------------
    // Certifications: Array [ {…}, {…} ]
    // ​---------------------------------------------
    // 0: Object { _id: "66339fa38eaadfa13595bc5b", categoryId: 4, categoryTitle: "Certifications", … }
    // ​---------------------------------------------
    // _id: "66339fa38eaadfa13595bc5b"
    // categoryId: 4
    // categoryTitle: "Certifications"
    // description: "A Complete Guide to Learning ChatGPT 4, Midjourney, DALL-E 2, and AI."
    // description2: "<p>A Complete Guide to Learning ChatGPT 4, Midjourney, DALL-E 2, and AI.</p>"
    // endDate: "Oct 2023"
    // organization: "SitePoint"
    // stDate: "Oct 2023"
    // title: "ChatGPT 4, Midjourney, DALL-E 3 and AI"
    // ​---------------------------------------------

    })
  }
}
