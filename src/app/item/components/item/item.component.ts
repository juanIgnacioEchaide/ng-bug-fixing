import { Component, inject, input } from '@angular/core';
import { Item } from '../../model/item.model';
import { ItemsStateService } from '../../services/items-state.service';
import { ButtonModule } from 'primeng/button';

@Component({ 
  selector: 'app-item',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  state = inject(ItemsStateService)
  item = input<Item>({id: '', name: '', quantity: 0})

  remove(id: string | undefined) {
    this.state.deleteItem(id || '');
  }
}
