import {Component, OnDestroy, OnInit} from '@angular/core';
import {AjoutService} from '../services/ajout.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  public newpodcast: Podcast;
  public loading: boolean;
  public matiereSub: Subscription;
  public pathPodcasts = 'http://toto.insa-lyon.fr:3000/';
  podcastForm: FormGroup;

  constructor(private ajoutService: AjoutService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.matiereSub = this.ajoutService.matiere$.subscribe(
      (matiere) => {
        this.matiere = matiere;
        this.podcasts = matiere.podcasts;
        this.loading = false;
      }
    );
    this.ajoutService.getMatiereByIdMatiere(id);
    this.initForm();
  }
  initForm(): void{
    this.podcastForm = this.formBuilder.group( {
      nom: ['', Validators.required],
      description: ['', Validators.required],
      path: ['', Validators.required],
    });
  }
  onSubmitForm(): void {
    const podcast = new Podcast();
    podcast.nom = this.podcastForm.get('nom').value;
    podcast.description = this.podcastForm.get('description').value;
    podcast.path = this.pathPodcasts + this.podcastForm.get('path').value + '.mp3';
    this.podcasts.push(podcast);
    console.log(this.podcasts);
    this.matiere.podcasts = this.podcasts;
    console.log(this.matiere);
    this.ajoutService.modifyMatiere(this.matiere);
    this.router.navigate(['/matieres/teacher/' + this.matiere.code]);
  }
  ngOnDestroy(): void {
    this.matiereSub.unsubscribe();
  }

}
