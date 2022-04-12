import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  userRegistration(userData:any) {
    return this.http.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d')
  }


  getUserProfile() {
    return this.http.get(' https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2')
  }
}
