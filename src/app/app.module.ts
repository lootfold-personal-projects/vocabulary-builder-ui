import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemListComponent } from './items/item-list/item-list.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { ViewItemComponent } from './items/view-item/view-item.component';
import { ItemsService } from './items/items.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddItemComponent,
    ViewItemComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
