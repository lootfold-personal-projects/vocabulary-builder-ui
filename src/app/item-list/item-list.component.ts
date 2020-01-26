import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  constructor(private service: ItemsService) {}

  ngOnInit() {
    this.service.getItems().subscribe(response => {
      console.log(response);
    });
  }
}
