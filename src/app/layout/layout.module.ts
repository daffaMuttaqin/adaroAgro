import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
