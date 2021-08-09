import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http : HttpClient) { }

  listUser(){
    const url = "https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }
  getSingleUser(){
    const url = "https://reqres.in/api/users/2";
    return this.http.get(url);
  }
  getListUser(){
    const url = "https://reqres.in/api/unknown";
    return this.http.get(url);
  }
  deleteUserList(){
    const url = "https://reqres.in/api/users/2";
    return this.http.delete(url);
  }
}
