import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    component: LandingPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'termsAndCondition',
    component: TermsAndConditionComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
