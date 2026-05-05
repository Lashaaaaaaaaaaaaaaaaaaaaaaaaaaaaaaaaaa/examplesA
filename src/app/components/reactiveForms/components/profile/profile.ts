import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  public firstname: string = '';
  public lastname: string = '';

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((data: any) => {
      console.log(data);
      this.firstname = data.firstName;
      this.lastname = data.lastName;
    });
  }
}
