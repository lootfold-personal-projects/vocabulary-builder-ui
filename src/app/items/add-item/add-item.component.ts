import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items/items.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public word: string;
  public meaning: string;

  constructor(
    private service: ItemsService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  submit() {
    this.spinner.show();
    this.service.addItem({ word: this.word, meaning: this.meaning }).subscribe(
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
