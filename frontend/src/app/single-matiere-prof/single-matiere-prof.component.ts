import {Component, OnDestroy, OnInit} from '@angular/core';
import {Matiere} from '../models/Matiere.model';
import {Subscription} from 'rxjs';
import {AjoutService} from '../services/ajout.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Podcast} from '../models/Podcast.model';

@Component({
  selector: 'app-single-matiere-prof',
  templateUrl: './single-matiere-prof.component.html',
  styleUrls: ['./single-matiere-prof.component.css']
})
export class SingleMatiereProfComponent implements OnInit, OnDestroy {

  public matiere: Matiere;
  public podcasts: Podcast[];
  public loading: boolean;
  public matiereSub: Subscription;

  constructor(private ajoutService: AjoutService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('toto');
    this.loading = true;
    const id = this.route.snapshot.params["id"];
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        console.log('test', matiere);
        this.matiere = matiere;
        this.podcasts = matiere['podcasts'];
      }
    );
    this.ajoutService.getMatiereByIdMatiere(id);
    this.loading = false;
  }
  onAddPodcast(): void {
    this.router.navigate(['/ajoutPodcast/' + this.matiere.code]);
  }

  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
