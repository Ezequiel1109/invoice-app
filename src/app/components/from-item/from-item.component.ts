import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'from-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './from-item.component.html',
})
export class FromItemComponent {
  @Output() addItemEventEmmiter = new EventEmitter();

  private countId = 4;
  //inicializando
  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {
      this.addItemEventEmmiter.emit({ id: this.countId, ...this.item });
      this.countId++;
      this.item = {
        product: '',
        price: '',
        quantity: '',
      };
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
