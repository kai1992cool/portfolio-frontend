// ITEMS SERVICE

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Item } from "../interfaces/item.interface";

@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    private baseUrl = `${environment.apiUrl}/items`;

    constructor(private httpClient: HttpClient) { }

    getAll() {
        return this.httpClient.get<Item[]>(this.baseUrl);
    }

}

