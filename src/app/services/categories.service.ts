// CATEGORIES SERVICE

import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Item } from "../interfaces/item.interface";
import { Category } from "../interfaces/category.interface";
@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    private baseUrl = 'http://localhost:3000/api/categories';

    private httpClient = inject(HttpClient);

    async getAll() {
        return firstValueFrom(
            this.httpClient.get<Category[]>(this.baseUrl)
        );
    }

    getByCategoryTitle(categoryTitle: string) {
        return firstValueFrom(this.httpClient.get<Category[]>(`${this.baseUrl}/${categoryTitle}`));
    }
}