import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarsModule } from 'app/cars/cars.module';

import { AppComponent } from './app.component';
import { CarsService } from './cars/cars.service';
import { CoreModule } from './core-module/core-module';
import { AppRoutingModule } from './app-routing-module';
import { CarsRoutingModule } from './cars/cars-routing-module';
import { ImportantDirective } from './shared-module/directives/important.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
