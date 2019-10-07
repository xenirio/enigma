import { Component, OnInit, Input } from '@angular/core';
import { faStopwatch, faRedoAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  //@Input() started: number;
  time: number = 0;

  constructor() {
    /*setInterval(() => {
      this.time = Math.floor((new Date().getTime() - this.started) / 1000)
    }, 1000);*/
  }

  faStopwatch = faStopwatch;
  faRedoAlt = faRedoAlt;
  faShoePrints = faShoePrints;

  ngOnInit() {
  }

}
