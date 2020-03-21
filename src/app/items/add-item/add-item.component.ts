import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from '../item';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
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
        (error: Response) => {
          if (error.status === 409) {
            this.toastr.error('5 word per week limit reached.');
          } else {
            console.error(error);
          }
          this.spinner.hide();
        }
      );
    }
  }
}
