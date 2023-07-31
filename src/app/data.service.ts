import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  createItem(item: any) {
    return this.http.post(`${this.apiUrl}/posts`, item);
  }

  updateItem(item: any) {
    return this.http.put(`${this.apiUrl}/posts/${item.id}`, item);
  }

  deleteItem(itemId: number) {
    return this.http.delete(`${this.apiUrl}/posts/${itemId}`);
  }

  getEmpDetails(){
    return this.http.get('http://localhost:3000/empDetails')
  }
}
