import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  MyProfile:boolean|any;
  MyPosts:boolean|any;
  MyComments:boolean|any;

  constructor() { }

  ngOnInit(): void {
  }

  showMyProfile(){
  }
  showMyPosts(){
    this.MyPosts=true;
  }  
  showMyComments(){

  }

}
