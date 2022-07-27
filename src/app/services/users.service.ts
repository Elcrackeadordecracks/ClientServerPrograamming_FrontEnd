import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageResult } from '../interfaces/language';
import { User, UserResult } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
    this.getUsers().subscribe((result:UserResult) =>{
      console.log(result.data);
    });
   }

   getUsers(){
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
    
   }

   getLanguages(){
    return this.http.get<LanguageResult>("http://localhost:3000/languages");
    
   }
}
