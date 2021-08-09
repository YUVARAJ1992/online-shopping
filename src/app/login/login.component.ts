import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router, private api : ApiService) { }

  ngOnInit(): void {
  }
 
  clickToRegisterPage(){
    this.router.navigateByUrl('/register');
  }

  clickToHomePage(){
    this.router.navigateByUrl('/home');
  }
  login = {
    email: '',
    password: ''
  }

  user = {
    name : '',
    job : ''
  }
  


  onClickLogin(){
    console.log(this.login);

    this.api.loginCall(this.login).subscribe((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);

    });
  }

  onClickUser(){
    // console.log(this.user)

    this.api.userCreation(this.user).subscribe((response) => {
      console.log(response);
    }, (error)=>{
      console.log(error);
    })
  }

  onDeleteUser(){
  this.api.deleteUser().subscribe((response)=>{
    console.log(response);
  },(error)=>{
    console.log(error);
  });

  }

  
}
