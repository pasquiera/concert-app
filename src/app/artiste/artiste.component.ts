import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/shared/services/rest.service';
import { IArtiste } from '../shared/models/IArtiste';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  artiste: IArtiste = { nom: '', prenom: '', alias: '', role: [], presentation: '', image: '' };
  id: number;

  constructor(private rest: RestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id of the artiste 
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.getArtiste(this.id);
  }

  getArtiste(id: number): void {
    // get all the infos of the artiste
    this.rest.getArtiste(id).subscribe(res => {
      this.artiste = res[0];
    }, err => {
      console.log(err);
    })
  }
}
