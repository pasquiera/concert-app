import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/shared/services/rest.service';


import WaveSurfer from 'wavesurfer.js';
import { IActivite } from '../shared/models/IActivite';
// Create a new object with a given prototype 
var wavesurfer = Object.create(WaveSurfer);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public playBtn: Boolean = true;
  public soundBtn: Boolean = true;
  activites: IActivite[] = [];

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit(): void {

    this.getActivites();

    // Create a wave pattern for audio file
    wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#dde5ec',
      progressColor: '#6656c0',
      height: 100,
      responsive: true,
      hideScrollbar: true,
    });

    wavesurfer.load("assets/audio/disco_ncs.mp3");
  }

  ngAfterViewInit(): void {
    // reset play button at the end of the song
    wavesurfer.on('finish', () => {
      this.playBtn = true;
    })
  }

  play(): void {
    // Play/Stop audio file
    wavesurfer.playPause();
    this.playBtn = !this.playBtn;
  }

  mute(): void {
    // Mute audio file
    wavesurfer.toggleMute();
    this.soundBtn = !this.soundBtn;
  }

  getActivites(): void {
    // Get all activites
    this.rest.getActivites().subscribe(res => {
      this.activites = res;
    },
      err => {
        console.log("Error occured : " + err)
      })
  }

}
