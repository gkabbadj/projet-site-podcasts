import { Component, OnInit } from '@angular/core';
import {AuthTeacherService} from '../services/authteacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-teacher',
  templateUrl: './auth-teacher.component.html',
  styleUrls: ['./auth-teacher.component.css']
})
export class AuthTeacherComponent implements OnInit {

  authTeacherStatus: boolean;

  constructor(private authTeacherService: AuthTeacherService, private router: Router) { }

  ngOnInit(): void {
    this.authTeacherStatus = this.authTeacherService.isAuthTeacher;
  }

  onSignInTeacher(){
    this.authTeacherService.signInTeacher().then(
      () => {
        this.authTeacherStatus = this.authTeacherService.isAuthTeacher;
        this.router.navigate(['/matieres/teacher']);
      }
    );
  }

  onSignOutTeacher(){
    this.authTeacherService.signOutTeacher();
    this.authTeacherStatus = this.authTeacherService.isAuthTeacher;
  }

}

