import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './item/components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-bug-fixing';
}
