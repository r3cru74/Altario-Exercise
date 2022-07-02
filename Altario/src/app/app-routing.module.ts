import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorPageComponent } from './generator-page/generator-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {path:'generator',component :GeneratorPageComponent},
  {path:'payment',component :PaymentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
