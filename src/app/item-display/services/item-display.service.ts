// item-display.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../model/item.model';


@Injectable({ providedIn: 'root' })
export class ItemDisplayService {

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  public onSomeEvent: Observable<Item[]> = this.itemsSubject.asObservable();

  constructor() {
    const initialItems: Item[] = [
      { id: '1', name: 'Manzana', quantity: 3.14159 },
      { id: '2', name: 'Banana', quantity: 2.71828 },
      { id: '3', name: 'Naranja', quantity: 1.61803 }
    ];

    const mapped = initialItems.map(item => ({
      ...item,
      quantity: parseFloat(item.quantity.toFixed(2))
    }));

    this.itemsSubject.next(mapped);
  }

  refreshItems(): void {
    const refreshedItems: Item[] = [
      { id: '4', name: 'Pera', quantity: 2.33333 },
      { id: '5', name: 'Durazno', quantity: 1.99999 }
    ];

    const mapped = refreshedItems.map(item => ({
      ...item,
      quantity: parseFloat(item.quantity.toFixed(2))
    }));

    this.itemsSubject.next(mapped);
  }
}
