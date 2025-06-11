import {
  Component,
  inject,
  OnInit
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ItemsStateService } from '../../services/items-state.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-items',
  imports: [ButtonModule, CommonModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  state = inject(ItemsStateService)

  readonly items = this.state.items;
  readonly loading = this.state.loading;
  readonly error = this.state.error;

  remove(id: string) {
    this.state.deleteItem(id);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('compo', this.items())
  }
}