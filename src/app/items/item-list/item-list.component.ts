import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Item } from '../item';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  constructor(
    private service: ItemsService,
    private spinner: NgxSpinnerService
  ) {}

  public items: Item[];

  ngOnInit() {
    this.spinner.show();
    this.service.getItems().subscribe(
      response => {
        this.items = response && response;
        this.spinner.hide();
      },
      error => {
        console.error(error);
        this.spinner.hide();
      }
    );
  }
}
