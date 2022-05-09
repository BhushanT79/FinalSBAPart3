import { Component, OnInit } from '@angular/core';
import { UserService } from './_services';


export class Interests {
  constructor(
    public userId: number,
    public likes: string,
    public dislikes: string,
    public hobbies: ArrayLike<string>,
    public profileUrl: string,
    public about: string
  ) { }
}

export class User {
  constructor(
    public userId: string,
    public name: string,
    public username: string,
    public password: string,
    public city: string,
    public country: string,
    public phoneNumber: number,
    public email: string,
    public age: number,
    public gender: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-datingAngular';

 public interestsdata: Interests;

 public userdata: User | undefined;
 public selectedLevel= 1;

  constructor(public service: UserService) {
	this.getInterests();
  }


 
 ngOnInit() {
    this.getInterests();
  }

 getInterests() {
      this.service.getInterestsdata().subscribe
     (
       (response)=>
       {
         this.interestsdata = response;
       },
       (error) => console.log(error)
     );
  }

 getUsers() {
 this.service.userid= this.selectedLevel;
 this.service.getUserdata().subscribe
     (
       (response)=>
       {
         this.userdata = response;
       },
       (error) => console.log(error)
     );
 console.log(this.selectedLevel);
  }

 navpage() {
 this.getUsers();

}
}