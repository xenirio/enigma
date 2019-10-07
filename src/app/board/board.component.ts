import { Circuit } from './shared/circuit.model';
import { Component, OnInit } from '@angular/core';
import { Rotor } from './shared/rotor.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private _rotors: { [id: string]: Rotor} = {};
  circuits: { [id: string]: Circuit} = {};

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
    this.circuits["R01"] = new Circuit({
      dial: this._rotors["R01"],
      rotors: []
    });
  }

  ngOnInit() {
  }

  onDial(id: string) {
    this.circuits[id].dial.rotate();
    this.steps.push(id);
  }

  onReset() {
    this.steps = [];
    Object.keys(this._rotors).forEach(k => this._rotors[k].reset());
  }
}
