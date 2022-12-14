import { Component, OnInit } from '@angular/core';
import { Language, LanguageResult } from 'src/app/interfaces/language';
import {User,UserResult} from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  users:User[] = [];
  languages:Language[]=[];
  

  constructor(private service: UsersService) {
    this.getUsers();
    this.giveMeLanguages();
   }

  ngOnInit(): void {
  }
  getUsers(): void{
    this.service.getUsers().subscribe((result:UserResult)=>{
      console.log(result.data);
      this.users=result.data;
    });
  }

  giveMeLanguages(): void{
    this.service.getLanguages().subscribe((result:LanguageResult)=>{
      console.log(result.data);
      this.languages = result.data;

    });
  }

  
  



}
