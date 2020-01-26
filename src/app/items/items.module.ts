import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelsModule } from '../model/models.module';

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, ModelsModule],
  exports: [ItemListComponent]
})
export class ItemsModule {}
