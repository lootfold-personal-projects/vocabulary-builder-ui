import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  public item: Item;
  constructor(
    private service: ItemsService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.service.getById(id).subscribe(
      response => {
        this.item = response;
        this.spinner.hide();
      },
      err => {
        console.error(err);
        this.spinner.hide();
      }
    );
  }

  delete(id) {
    this.spinner.show();
    this.service.deleteItem(id).subscribe(
      resp => {
        console.log('Deleted', resp);
        this.router.navigateByUrl('/');
        this.spinner.hide();
      },
      err => {
        console.error(err);
        this.spinner.hide();
      }
    );
  }
}
