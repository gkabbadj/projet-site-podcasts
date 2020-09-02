import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import { AjoutService} from '../services/ajout.service';
import {Router} from '@angular/router';
import {Matiere} from '../models/Matiere.model';

@Component({
  selector: 'app-all-matieres-prof',
  templateUrl: './all-matieres-prof.component.html',
  styleUrls: ['./all-matieres-prof.component.css']
})
export class AllMatieresProfComponent implements OnInit, OnDestroy {

  public matieres: Matiere[] = [];
  public loading: boolean;
  public id: string;
  public matieresSub: Subscription;

  constructor(private ajoutService: AjoutService,
              private router: Router) { }

  ngOnInit(): void {
    /* this.initForm(); */
    this.loading = true;
    /*this.id = this.activatedRoute.snapshot.params['id'];*/
    this.matieresSub = this.ajoutService.matieres$.subscribe(
      (matieres) => {
        this.matieres = matieres;
        this.loading = false;
      }
    );
    this.ajoutService.getMatieres();
  }
  onMatiereClicked(id: string): void {
    this.router.navigate(['/matieres/teacher/' + id]);
  }
  /*
  initForm(){
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      teachers: this.formBuilder.array([])
    });
  }
  onSubmitForm(): void {
    const formValue = this.userForm.value;
    const newMatiere: Matiere = {
      title: formValue['title'],
      teachers: formValue['teachers'],
    };
    this.matieres.push(newMatiere);
    this.ajoutService.createNewMatiere(newMatiere);
  }
  getTeachers(){
    return this.userForm.get('teachers') as FormArray;
  }
  onAddTeachers(){
    const newTeacherControl = this.formBuilder.control('', Validators.required);
    this.getTeachers().push(newTeacherControl);
  }
  onMatiereModified(differentMatiere: Matiere, id: string): void {
    this.ajoutService.modifyMatiere(id, differentMatiere);
  }
  onMatiereDeleted(id: string): void {
    this.ajoutService.deleteMatiere(id);
  }*/
  ngOnDestroy(): void {
    this.matieresSub.unsubscribe();
  }

}
