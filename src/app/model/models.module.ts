import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ItemsService]
})
export class ModelsModule {}
