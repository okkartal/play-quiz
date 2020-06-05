import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';  

@Injectable()
export class AuthService {
   
    private serviceUrl = 'https://localhost:44304/api/account';

    constructor(private http : HttpClient,private router : Router){}

    get isAuthenticated(){
        return !!localStorage.getItem('token');
    }

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    register(credentials){
      this.http.post<any>(`${this.serviceUrl}`,credentials).subscribe(res => {
        this.authenticate(res);
      });
    }

    login(credentials){
        this.http.post<any>(`${this.serviceUrl}/login`,credentials).subscribe(res => {
           this.authenticate(res);
        });
      }

      authenticate(res){
        localStorage.setItem('token',res);
        this.router.navigate(['/']);
      }
      
      logout(){
          localStorage.removeItem('token');
      }
}