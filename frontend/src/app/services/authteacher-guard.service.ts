import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthTeacherService} from './authteacher.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthTeacherGuard implements CanActivate {

  constructor(private authTeacherService: AuthTeacherService,
              private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
              Observable<boolean> |
              Promise<boolean> |
              boolean {
    if (this.authTeacherService.isAuthTeacher) {
      console.log(this.authTeacherService.isAuthTeacher);
      return true;
    } else {
      this.router.navigate(['/auth/teacher']);
    }
  }
}
