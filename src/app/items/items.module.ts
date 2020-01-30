import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ModelsModule } from '../model/models.module';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'items/add', component: AddItemComponent },
  { path: 'items/:id', component: ViewItemComponent }
];

@NgModule({
  declarations: [ItemListComponent, AddItemComponent, ViewItemComponent],
  imports: [
    CommonModule,
    ModelsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [ItemListComponent, RouterModule]
})
export class ItemsModule {}
