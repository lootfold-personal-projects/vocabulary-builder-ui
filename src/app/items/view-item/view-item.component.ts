import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/model/items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';

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
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(response => {
      this.item = response;
    });
  }

  delete(id) {
    this.service.deleteItem(id).subscribe(
      resp => {
        console.log('Deleted', resp);
        this.router.navigateByUrl('/');
      },
      err => {
        console.error(err);
      }
    );
  }
}
