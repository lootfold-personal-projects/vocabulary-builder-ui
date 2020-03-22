import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Item } from '../item';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  constructor(
    private service: ItemsService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  public items: Item[];
  public offset = 0;
  public dateRange: string;

  ngOnInit() {
    this.getItems();
  }

  private getItems() {
    this.spinner.show();
    this.service.getItems(this.offset).subscribe(
      response => {
        this.items = response && response.items;
        this.dateRange = response && response.dateRange;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.toastr.error('Something went wrong :(');
      }
    );
  }

  previous(): void {
    this.offset--;
    this.getItems();
  }

  next(): void {
    this.offset++;
    this.getItems();
  }
}
