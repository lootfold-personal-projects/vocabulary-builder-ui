import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';
import { ItemsDto } from './items-dto';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private client: HttpClient) {}

  private URL = '/api/items';

  public getItems(offset): Observable<ItemsDto> {
    return this.client.get<ItemsDto>(`${this.URL}?offset=${offset}`);
  }

  public addItem(newItem) {
    return this.client.post(this.URL, newItem);
  }

  public getById(id): Observable<Item> {
    return this.client.get<Item>(`${this.URL}/${id}`);
  }

  public deleteItem(id): Observable<Item> {
    return this.client.delete<Item>(`${this.URL}/${id}`);
  }
}
