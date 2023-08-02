import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  deleteEmp(id:number){
    return this.http.delete('http://localhost:3000/empDetails' + "/"+  id)
  }

  addEmpDetails(details: any){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post('http://localhost:3000/empDetails', details, options)
  }

  editUserDetails(id: any, user: any){
    return this.http.put('http://localhost:3000/empDetails' + "/" + id, user)
  }
}
