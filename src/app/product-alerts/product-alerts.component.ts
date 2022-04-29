import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  //Output allows the ProductAlertsComponent to emit an event when valeu of 'notify' property changes
  @Output() notify = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
}
