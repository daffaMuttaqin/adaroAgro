import { Component, OnInit } from '@angular/core';

declare let hamburger: any;
declare let navlinks: any;
declare let line: any;
declare let line2: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    new hamburger();
    new navlinks();
    new line();
    new line2();
  }

}
