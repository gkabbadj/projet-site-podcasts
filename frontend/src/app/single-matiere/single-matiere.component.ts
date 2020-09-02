import {Component, OnDestroy, OnInit} from '@angular/core';
import {Matiere} from '../models/Matiere.model';
import {Subscription} from 'rxjs';
import {AjoutService} from '../services/ajout.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Podcast} from '../models/Podcast.model';

@Component({
  selector: 'app-single-matiere',
  templateUrl: './single-matiere.component.html',
  styleUrls: ['./single-matiere.component.css']
})
export class SingleMatiereComponent implements OnInit, OnDestroy {

  public podcasts: Podcast[] = [];
  public matiere: Matiere;
  public loading: boolean;
  public matiereSub: Subscription;

  constructor(private ajoutService: AjoutService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["id"];
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        this.matiere = matiere;
        this.podcasts = matiere['podcasts'];
        this.loading = false;
      }
    );
    this.ajoutService.getMatiereByIdMatiere(id);
  }
  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
