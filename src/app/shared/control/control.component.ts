import { Component, OnInit } from '@angular/core';
import { faStopwatch, faRedoAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  private _started;
  time: number = 125959;

  constructor() { 
    this._started = new Date().getTime();
    /*setInterval(() => {
      this.time = Math.floor((new Date().getTime() - this._started) / 1000)
    });*/
  }

  faStopwatch = faStopwatch;
  faRedoAlt = faRedoAlt;
  faShoePrints = faShoePrints;

  ngOnInit() {
  }

}
