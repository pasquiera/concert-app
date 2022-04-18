import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { IFans } from '../models/IFans';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {

  fans: IFans[] = [];
  placeholder: string = 'Trier par';

  constructor(private rest: RestService) {
  }

  ngOnInit(): void {

    this.getFans();
  }

  getFans(): void {
    // Get all fans
    this.rest.getFans().subscribe(res => {
      this.fans = res;
    },
      err => {
        console.log("Error occured : " + err)
      })
  }

  onAddFan(addForm: NgForm): void {
    //add a new fan to the db
    //console.log(addForm.value)
    this.rest.addFans(addForm.value).subscribe(res => {
      this.getFans();
      addForm.reset();
    }, err => {
      console.log(err);
      addForm.reset();
    })
  }

  searchFans(key: string): void {
    // search if the key parameter match any columns of a fan
    const results: IFans[] = [];
    for (let fan of this.fans) {
      if (fan.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || fan.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || fan.ville.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || fan.pays.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(fan);
      }
    }

    this.fans = results;

    if (key.length == 0) {
      this.getFans();
    }

    this.placeholder = 'Trier par'

  }

  sortFilter(filter: string): void {
    // sort in alphabatical order
    switch (filter) {
      case 'nom':
        this.placeholder = "Nom";
        this.fans.sort((a, b) => a.nom.localeCompare(b.nom))
        break;
      case 'ville':
        this.placeholder = "Ville";
        this.fans.sort((a, b) => a.ville.localeCompare(b.ville))
        break;
      case 'pays':
        this.placeholder = "Pays";
        this.fans.sort((a, b) => a.pays.localeCompare(b.pays))
        break;
    }
  }

}
