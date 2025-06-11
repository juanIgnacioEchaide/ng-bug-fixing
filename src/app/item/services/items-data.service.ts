import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Item } from "../model/item.model";
import generateRandomMock from "../utils/generateRandomMock";

@Injectable({ providedIn: 'root' })
export class ItemsDataService {
  constructor() {} 
 
  getItems(): Observable<Item[]> {
    const items = generateRandomMock()
    return of(items)
  }

  deleteItem(id: string): Observable<void> {
    return of(console.log('item', id, 'deleted'))
  }
}