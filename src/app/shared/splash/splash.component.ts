import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  visibility: string = "visible";

  constructor() { }

  ngOnInit() {
  }

  dismiss() {
    this.visibility = "invisible";
  }
}
