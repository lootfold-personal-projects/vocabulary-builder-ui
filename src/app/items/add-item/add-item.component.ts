import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/model/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public word: string;
  public meaning: string;

  constructor(private service: ItemsService, private router: Router) {}

  ngOnInit() {}

  submit() {
    console.log(`${this.word} | ${this.meaning}`);
    this.service.addItem({ word: this.word, meaning: this.meaning }).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/items']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
