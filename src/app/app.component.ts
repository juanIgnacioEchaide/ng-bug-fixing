import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './item/components/items/items.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-bug-fixing';
}
