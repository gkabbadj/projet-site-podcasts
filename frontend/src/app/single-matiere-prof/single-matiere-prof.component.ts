import {Component, OnDestroy, OnInit} from '@angular/core';
import {Matiere} from '../models/Matiere.model';
import {Subscription} from 'rxjs';
import {AjoutService} from '../services/ajout.service';
import {Router} from '@angular/router';
import {Podcast} from '../models/Podcast.model';

@Component({
  selector: 'app-single-matiere-prof',
  templateUrl: './single-matiere-prof.component.html',
  styleUrls: ['./single-matiere-prof.component.css']
})
export class SingleMatiereProfComponent implements OnInit, OnDestroy {

  public matiere: Matiere;
  public loading: boolean;
  public matiereSub: Subscription;

  constructor(private ajoutService: AjoutService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        this.matiere = matiere;
        this.loading = false;
      }
    );
    this.ajoutService.getMatiereByIdMatiere(this.matiere.code);
  }
  onAddPodcast(): void {
    this.router.navigate(['/ajoutPodcast/' + this.matiere.code]);
  }

  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
