import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './Models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private client: HttpClient) {}

  private URL = '/api/items';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getItems(): Observable<Item[]> {
    return this.client.get<Item[]>(this.URL);
  }
}
