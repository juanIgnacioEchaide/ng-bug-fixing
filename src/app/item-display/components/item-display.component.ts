import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import { ItemDisplayService } from '../services/item-display.service';

@Component({
  standalone: true,
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

  @Input() label: string = '';
  @Output() onDelete = new EventEmitter<string>();

  id: string = '';

  someData: any[] = [];
  parsedData: any[] = [];

  constructor(private ItemDisplayService: ItemDisplayService, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.label === '') {
      this.label = 'Empty';
    }

    this.subscribeToData();
  }

  private subscribeToData(): void {
    this.ItemDisplayService.onSomeEvent.subscribe(data => {
      this.someData = data;
      this.parsedData = this.processData(this.someData);
    });
  }

  @HostListener('mouseover')
  onMouseOver(): void {
    // Lógica del mouseover; puede cambiar estilo desde SCSS también
  }

  public processData(originalData: any[]): any[] {
    return originalData.map(oneData => ({
      ...oneData,
      quantity: parseFloat(Number(oneData.quantity).toFixed(2))
    }));
  }

  public clickDeleteButton(id: string): void {
    this.onDelete.emit(id);
  }

  public updateIdWhenIsPossible(id: string): void {
    if (this.id !== id) {
      this.id = id;
      this.notifyIdChanges(id);
    }
  }

  private notifyIdChanges(id: string): void {
    console.log('Your ID has changed to: ' + id + '!');
  }

  public changeColour(element: ElementRef, color: string): void {
    this.renderer.setStyle(element.nativeElement, 'color', color);
  }
}
