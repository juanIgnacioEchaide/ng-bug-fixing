import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Item } from "../model/item.model";

@Injectable({ providedIn: 'root' })
export class ItemsDataService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    const items = [{ id: 1, name: 'caca', quantity: 10 }, { id: 2, name: 'pis', quantity: 10 }] as unknown as Item []
    return of(items)
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`/api/items/${id}`);
  }
}