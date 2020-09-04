import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Matiere} from '../models/Matiere.model';
import {Podcast} from '../models/Podcast.model';

@Injectable({
  providedIn: 'root'
})
export class AjoutService {

  constructor(private http: HttpClient) {}

  private matieres: Matiere[];
  private matiere: Matiere;
  public matiere$ = new Subject<Matiere>();
  public matieres$ = new Subject<Matiere[]>();
  public podcasts$ = new Subject<Podcast[]>();
  public podcast$ = new Subject<Podcast>();


  emitMatiere(): void {
    this.matiere$.next(this.matiere);
  }
  emitMatieres(): void {
    this.matieres$.next(this.matieres);
  }


  getMatieres(): void {
    this.http.get('http://tc405-112-10.insa-lyon.fr:3000/api/data/matieres').subscribe(
      (matieres: Matiere[]) => {
        if (matieres) {
          this.matieres = matieres;
          this.emitMatieres();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMatiereByIdMatiere(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://tc405-112-10.insa-lyon.fr:3000/api/data/matieres/' + id).subscribe(
        (matiere: Matiere) => {
          if (matiere) {
            this.matiere = matiere;
            this.emitMatiere();
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  modifyMatiere(matiere: Matiere) {
    return new Promise((resolve, reject) => {
      console.log(matiere);
      this.http.put('http://tc405-112-10.insa-lyon.fr:3000/api/data/ajout/' + matiere.code, matiere).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /*createNewThingWithFile(niveau: Niveau, image: File) {
    return new Promise((resolve, reject) => {
      const thingData = new FormData();
      thingData.append('thing', JSON.stringify(niveau));
      thingData.append('image', image, niveau.title);
      this.http.post('http://localhost:3000/api/data/', thingData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  modifyThingWithFile(id: string, niveau: Niveau, image: File | string) {
    return new Promise((resolve, reject) => {
      let thingData: Niveau | FormData;
      if (typeof image === 'string') {
        niveau.imageUrl = image;
        thingData = niveau;
      } else {
        thingData = new FormData();
        thingData.append('thing', JSON.stringify(niveau));
        thingData.append('image', image, niveau.title);
      }
      this.http.put('http://localhost:3000/api/stuff/' + id, thingData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
*/

}
