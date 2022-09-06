import { coffeeReducer } from './store/coffees.reducer';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoffeesEffect } from './store/coffees.effect';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature('mycoffees', coffeeReducer),
    EffectsModule.forFeature([CoffeesEffect])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.bezkoder.com/angular-14-pagination-ngx/
//https://github.com/bezkoder/angular-8-ngx-pagination/blob/master/src/app/components/tutorials-list/tutorials-list.component.ts
//https://www.learmoreseekmore.com/2022/06/angular-14-statemanagement-crud-example-with-rxjs14.html

//https://codepen.io/FluidOfInsanity/pen/yaLRjd ==> Liste Table 
//https://codepen.io/masonconkright/pen/aJOoVO ==> Link
//https://codepen.io/mattc0m/pen/rNdMjKX  ==> Details List
