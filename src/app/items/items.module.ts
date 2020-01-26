import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ItemsService],
  exports: [ItemListComponent]
})
export class ItemsModule {}
