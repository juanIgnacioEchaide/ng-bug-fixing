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
  selector: 'app-list',
  imports: [ButtonModule, CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  state = inject(ItemsStateService)

  readonly items = this.state.items;
  readonly loading = this.state.loading;
  readonly error = this.state.error;

}