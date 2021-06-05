import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  options: any;
  overlays: any;

  ngOnInit() {
    this.options = {
      center: {lat: 39.59, lng: 2.609992778150642},
      zoom: 12
    };
  }

}
