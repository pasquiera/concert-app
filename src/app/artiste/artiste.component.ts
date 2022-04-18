import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { IArtiste } from '../models/IArtiste';

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
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.getArtiste(this.id);
  }

  getArtiste(id: number): void {
    this.rest.getArtiste(id).subscribe(res => {
      this.artiste = res[0];
      console.log(this.artiste.nom)
    }, err => {
      console.log(err);
    })
  }
}
