import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile:any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data:any) => {
      console.log(data)
      this.userProfile = data

    })
  }

}
