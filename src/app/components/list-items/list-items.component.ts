import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  @Input() items: Item[] = [];

  @Output() removeEventEmitter = new EventEmitter();
  onRemove(id: number){
    this.removeEventEmitter.emit(id);
  }
}
