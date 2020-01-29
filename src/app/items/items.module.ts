import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ModelsModule } from '../model/models.module';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemListComponent, AddItemComponent],
  imports: [CommonModule, ModelsModule, FormsModule],
  exports: [ItemListComponent]
})
export class ItemsModule {}
