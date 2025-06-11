import { Injectable, signal, computed } from "@angular/core";
import { Item } from "../model/item.model";
import { ItemsDataService } from "./items-data.service";

@Injectable({ providedIn: 'root' })
export class ItemsStateService {
  private readonly _items = signal<Item[]>([]);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly items = computed(() => this._items());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());

  constructor(private dataService: ItemsDataService) {
    this.loadItems();
  }

  private loadItems() {
    this._loading.set(true);
    this._error.set(null);  

    this.dataService.getItems().subscribe({
      next: (items) => {
        this._items.set(items);
        this._loading.set(false); 
      },
      error: (err) => {
        this._error.set('Error al cargar los items.');
        this._loading.set(false);
        console.error('Error loading items', err);
      }
    });
  }

  deleteItem(id: string) {
    this._loading.set(true);
    this.dataService.deleteItem(id).subscribe({
      next: () => {
        const updated = this._items().filter(item => item.id !== id);
        this._items.set(updated);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set('Error al borrar el item.');
        this._loading.set(false);
        console.error('Error deleting item', err);
      }
    });
  }
}
