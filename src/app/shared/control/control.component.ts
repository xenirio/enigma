import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStopwatch, faUndoAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input() started: number;
  @Input() steps: number;
  @Output() outReset: EventEmitter<any> = new EventEmitter();

  private _timer: any;
  time: number = 0;

  constructor() {
  }

  faStopwatch = faStopwatch;
  faUndoAlt = faUndoAlt;
  faShoePrints = faShoePrints;

  ngOnInit() {
    /*this._timer = setInterval(() => {
      this.time = (new Date().getTime() - this.started)
    }, 1000);*/
  }

  ngOnDestroy() {
    clearInterval(this._timer);
  }

  onReset() {
    this.outReset.emit();
  }
}
