import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemDisplayComponent } from "./item-display/components/item-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-bug-fixing';
}
