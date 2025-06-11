import { Component, inject, input } from '@angular/core';
import { Item } from '../../model/item.model';
import { ItemsStateService } from '../../services/items-state.service';

@Component({ 
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  state = inject(ItemsStateService)
  item = input<Item>()

  remove(id: string | undefined) {
    this.state.deleteItem(id || '');
  }
}
