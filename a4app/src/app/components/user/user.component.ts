import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 name:string;
 age:number;
 email:string;
 address:Address;
 hobbies:string[];
 hello:any;
 

  constructor(private dataService:DataService) {
    console.log('constructor ran.')
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name='Thrinath Shaga';
    this.age=30;
    this.email='tshaga94@gmail.com';
    this.address={
      street:'4303 Ramona Dr',
      city:'Fairfax',
      state:'Virginia' 
    }
    this.hobbies=['writing','reading','listening'];
    this.hello= 'hello';

    this.dataService.getPosts().subscribe((posts) =>{
      console.log(posts);
    });
  }
  onClick()
{
  this.name='Thrianth Shaga';
  this.hobbies.push('new hobby');
}
addHobby(hobby){
  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}

deleteHobby(hobby){
  for(let i=0;i<this.hobbies.length; i++){
    if(this.hobbies[i]==hobby){
      this.hobbies.splice(i,1);
    }
  }
}

}

interface Address{
  street:string;
  city:string;
  state:string;
}
