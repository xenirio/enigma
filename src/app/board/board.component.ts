import { Circuit } from './shared/circuit.model';
import { Component, OnInit } from '@angular/core';
import { Rotor } from './shared/rotor.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private _rotors: { [id: string]: Rotor } = {};
  layout: number[][];
  positions: any[] = [];
  circuits: { [id: string]: Circuit } = {};

  started: number;
  steps: string[] = [];

  get rotors(): Rotor[] {
    return Object.keys(this._rotors).map(k => this._rotors[k]);
  }

  constructor() {
    this.started = new Date().getTime();
    this._rotors["R01"] = new Rotor({
      id: "R01",
      ticks: 2,
      state: 1
    });
    this._rotors["R02"] = new Rotor({
      id: "R02",
      ticks: 2,
      state: 0
    });
    this.layout = [
      [1],
      [1]
    ];
    this.circuits = {
      "R01": new Circuit({
        dial: this._rotors["R01"],
        rotors: [
          this._rotors["R02"]
        ]
      }),
      "R02": new Circuit({
        dial: this._rotors["R02"],
        rotors: []
      })
    };
  }

  ngOnInit() {
    let rows = this.layout.length;
    let columns = this.layout[0].length;
    let margin = 100;

    let dimension = {
      width: margin * columns,
      height: margin * rows
    };
    let start_point = {
      x: (window.innerWidth - (dimension.width)) / 2,
      y: (window.innerHeight - (dimension.height)) / 2
    };
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        if (this.layout[i][j] === 1) {
          this.positions.push({
            y: start_point.y + (i * margin),
            x: start_point.x + (j * margin)
          });
        }
      }
    }
  }

  onDial(id: string) {
    let circuit = this.circuits[id];
    circuit.dial.rotate();
    circuit.rotors.forEach(r => { r.rotate(); });
    this.steps.push(id);
  }

  onReset() {
    this.steps = [];
    Object.keys(this._rotors).forEach(k => this._rotors[k].reset());
  }
}
