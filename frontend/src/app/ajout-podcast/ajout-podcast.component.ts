import {Component, OnDestroy, OnInit} from '@angular/core';
import {AjoutService} from '../services/ajout.service';
import {Router} from '@angular/router';
import {Matiere} from '../models/Matiere.model';
import {Subscription} from 'rxjs';
import {Podcast} from '../models/Podcast.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-podcast',
  templateUrl: './ajout-podcast.component.html',
  styleUrls: ['./ajout-podcast.component.css']
})
export class AjoutPodcastComponent implements OnInit, OnDestroy {

  public matiere: Matiere;
  public podcasts: Podcast[];
  public loading: boolean;
  public matiereSub: Subscription;
  public pathPodcasts = '../../backend/data/';
  userForm: FormGroup;

  constructor(private ajoutService: AjoutService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        this.matiere = matiere;
        this.podcasts = matiere['podcasts'];
        this.loading = false;
      }
    );
    this.ajoutService.getMatiereByIdMatiere(this.matiere.code);
    this.initForm();
  }
  initForm(): void{
    this.userForm = this.formBuilder.group( {
      nom: ['', Validators.required],
      description: ['', Validators.required],
      path: ['', Validators.required],
    });
  }
  onSubmitForm(): void {
    const formValue = this.userForm.value;
    const newPodcast = new Podcast(formValue['nom'],
        formValue['description'],
        this.pathPodcasts + formValue['path'] + '.mp3');
    this.podcasts.push(newPodcast);
    this.matiere.podcasts = this.podcasts;
    this.ajoutService.modifyMatiere(this.matiere.code, this.matiere);
    this.router.navigate(['/matieres/teacher/' + this.matiere.code]);
  }
  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
