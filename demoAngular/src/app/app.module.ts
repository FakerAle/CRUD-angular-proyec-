import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {NavComponent} from "./components/nav/nav.component"
import { AppComponent } from './app.component';
import {RouterModule}   from "@angular/router";
import {ServicesService}   from "../app/services/services.service";




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
