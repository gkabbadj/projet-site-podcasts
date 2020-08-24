import {Component, OnDestroy, OnInit} from '@angular/core';
import {Matiere} from '../models/Matiere.model';
import {Subscription} from 'rxjs';
import {StateService} from '../services/state.service';
import {AjoutService} from '../services/ajout.service';
import {Router} from '@angular/router';
import {Podcast} from '../models/Podcast.model';

@Component({
  selector: 'app-single-matiere',
  templateUrl: './single-matiere.component.html',
  styleUrls: ['./single-matiere-.component.css']
})
export class SingleMatiereComponent implements OnInit, OnDestroy {

  public podcasts: Podcast[] = [];
  public matiere: Matiere;
  public loading: boolean;
  public matiereSub: Subscription;

  constructor(private state: StateService,
              private ajoutService: AjoutService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        this.matiere = matiere;
        this.podcasts = matiere['podcasts'];
        this.loading = false;
      }
    );
    this.ajoutService.getMatiereByIdMatiere(this.matiere.code);
  }
  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
