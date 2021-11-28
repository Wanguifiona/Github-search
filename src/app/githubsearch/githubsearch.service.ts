import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})
export class GithubService {
  
 private username:string;
 private clientid ='818e270137215b908034';
 private clientsecret='6a5a5ba345dd87c41bb966e16818122fcb938b7d';



 constructor(private http:HttpClient) { 
   console.log("service is now ready!")
   this.username = 'Wanguifiona'
 }
 getProfileInfo(){
   return this.http.get('https://api.github.com/users/' + this.username + "?client_ id=" +this.clientid + "&client_secret=" + this.clientsecret); 
 }
 getProfileRepos(){
   return this.http.get('https://api.github.com/users/' + this.username + "/repos?client_ id=" +this.clientid + "&client_secret=" + this.clientsecret); 
 }
 updateProfile(username:string){
   this.username = username;

 }
}
