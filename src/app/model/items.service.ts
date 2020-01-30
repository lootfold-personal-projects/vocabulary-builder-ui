import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private client: HttpClient) {}

  private URL = '/api/items';

  public getItems(): Observable<Item[]> {
    return this.client.get<Item[]>(this.URL);
  }

  public addItem(newItem) {
    return this.client.post(this.URL, newItem);
  }

  public getById(id): Observable<Item> {
    return this.client.get<Item>(`${this.URL}/${id}`);
  }
}
