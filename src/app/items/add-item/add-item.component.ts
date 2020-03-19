import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from '../item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public newItem: Item = {} as any;

  constructor(
    private service: ItemsService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  submit(form: NgForm) {
    if (form.valid) {
      this.spinner.show();
      this.service.addItem(this.newItem).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/items']);
          this.spinner.hide();
        },
        error => {
          console.error(error);
          this.spinner.hide();
        }
      );
    }
  }
}
