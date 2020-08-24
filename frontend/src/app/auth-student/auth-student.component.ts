import { Component, OnInit } from '@angular/core';
import {AuthStudentService} from '../services/authstudent.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-student',
  templateUrl: './auth-student.component.html',
  styleUrls: ['./auth-student.component.css']
})
export class AuthStudentComponent implements OnInit {

  authStudentStatus = false;

  constructor(private authStudentService: AuthStudentService, private router: Router) { }

  ngOnInit(): void {
    this.authStudentStatus = this.authStudentService.isAuthStudent;
  }

  onSignInStudent(){
    this.authStudentService.signInStudent().then(
      () => {
        this.authStudentStatus = this.authStudentService.isAuthStudent;
        this.router.navigate(['/matieres/student']);
      }
    );
  }

  onSignOutStudent(){
    this.authStudentService.signOutStudent();
    this.authStudentStatus = this.authStudentService.isAuthStudent;
  }

}

