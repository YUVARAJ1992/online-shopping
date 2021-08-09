import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  singleUser(){
    const url = "https://reqres.in/api/users/2";
    return this.http.get(url);

  }
  testCode(){
    const url = "https://reqres.in/api/unknown";
    return this.http.get(url);
  }
  listOfUser(){
    const list= "https://reqres.in/api/users?page=2";
    return this.http.get(list);
  }

  loginCall(data : any){
    const url = "https://reqres.in/api/login";
    return this.http.post(url, data);
  }

  userCreation(data : any){
    const url =" https://reqres.in/api/users";
    return this.http.put(url, data);
  }

  deleteUser(){
    const url ="https://reqres.in/api/users/2";
    return this.http.delete(url);
  }


}
