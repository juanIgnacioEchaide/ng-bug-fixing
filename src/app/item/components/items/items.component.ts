import {
  Component,
  inject,
  OnInit
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ItemsStateService } from '../../services/items-state.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  standalone: true,
  selector: 'app-items',
  imports: [ButtonModule, CommonModule, ItemComponent],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  state = inject(ItemsStateService)

  readonly items = this.state.items;
  readonly loading = this.state.loading;
  readonly error = this.state.error;


}