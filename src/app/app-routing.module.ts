import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './items/item-list/item-list.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { ViewItemComponent } from './items/view-item/view-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'items/add', component: AddItemComponent },
  { path: 'items/:id', component: ViewItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
