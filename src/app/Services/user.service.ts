import { HttpClient } from '@angular/common/http';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = 'http://localhost:5161/Users';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(this.usersUrl).subscribe(res=>{
      console.log(res);
    });
  }
addUser(user:User){

 return this.http.put<boolean>(this.usersUrl,user);
}
isExist(user:User){
  return this.http.post<boolean>(this.usersUrl+'/isExist',user);
  ;
}
}


