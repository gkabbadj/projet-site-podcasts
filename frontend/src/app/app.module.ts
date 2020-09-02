import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SingleMatiereComponent } from './single-matiere/single-matiere.component';
import { AllMatieresComponent } from './all-matieres/all-matieres.component';
import { AllMatieresProfComponent } from './all-matieres-prof/all-matieres-prof.component';
import { SingleMatiereProfComponent } from './single-matiere-prof/single-matiere-prof.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthStudentService} from './services/authstudent.service';
import {AuthTeacherService} from './services/authteacher.service';
import { AuthStudentComponent } from './auth-student/auth-student.component';
import { AuthTeacherComponent } from './auth-teacher/auth-teacher.component';
import {AuthStudentGuard} from './services/authstudent-guard.service';
import {AuthTeacherGuard} from './services/authteacher-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AjoutService} from './services/ajout.service';
import {HttpClientModule} from '@angular/common/http';
import { AjoutPodcastComponent } from './ajout-podcast/ajout-podcast.component';


const appRoutes: Routes = [
  { path: 'matieres/student', component: AllMatieresComponent},
  { path: 'matieres/teacher', component: AllMatieresProfComponent},
  { path: 'matieres/teacher/:id', component: SingleMatiereProfComponent},
  { path: 'matieres/student/:id', component: SingleMatiereComponent},
  { path: 'ajoutPodcast/:id', component: AjoutPodcastComponent},
  { path: 'auth/student', component: AuthStudentComponent},
  { path: 'auth/teacher', component: AuthTeacherComponent},
  { path: '', component: AllMatieresComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleMatiereComponent,
    AllMatieresComponent,
    AllMatieresProfComponent,
    SingleMatiereProfComponent,
    FourOhFourComponent,
    AuthStudentComponent,
    AuthTeacherComponent,
    AjoutPodcastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthStudentService,
    AuthTeacherService,
    AuthStudentGuard,
    AuthTeacherGuard,
    AjoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
