import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total-component/total.component';
import { FromItemComponent } from '../from-item/from-item.component';
import { Item } from '../../models/item';
@Component({
  selector: 'app-invoice',
  standalone: true,
  //host: {ngSkipHydration: 'true'},
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FromItemComponent
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  } 

  removeItem(id: number){
    this.invoice = this.service.remove(id);
  }

  addItem(item: Item){
    this.invoice = this.service.addSave(item);
  }
}
