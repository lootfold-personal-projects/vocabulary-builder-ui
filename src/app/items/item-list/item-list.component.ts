import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  constructor(private service: ItemsService) {}

  public items: Item[];

  ngOnInit() {
    this.service.getItems().subscribe(response => {
      this.items = response && response;
    });
  }
}
