import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Item } from "../interfaces/interface.item";



@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    private baseUrl = `${environment.apiUrl}/items`;

    private httpClient = inject(HttpClient);

    getAll() {
        return firstValueFrom(
            this.httpClient.get<Item[]>(
                this.baseUrl
            )
        );
    }



}