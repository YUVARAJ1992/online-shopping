import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  backToLoginPage(){
    this.router.navigateByUrl('/');
  }

  
  displayUser(){
    this.api.singleUser().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    } )
  }

  resultCode(){
    this.api.testCode().subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }
  
  displayListOfUser(){
    this.api.listOfUser().subscribe( (response) => {
      console.log(response);
    } , (error) => {
      console.log(error);
    });
  }
}
