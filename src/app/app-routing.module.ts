import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './items/item-list/item-list.component';
import { AddItemComponent } from './items/add-item/add-item.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'add', component: AddItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
