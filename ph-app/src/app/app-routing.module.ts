import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [{ path: '', component: DatepickerComponent},
{ path: ':idProduct', component: ProductDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
