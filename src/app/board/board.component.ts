import { Circuit } from './shared/circuit.model';
import { Component, OnInit } from '@angular/core';
import { Rotor } from './shared/rotor.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rotors: { [id: string]: Rotor} = {};
  circuits: { [id: string]: Circuit} = {};

  started: number;
  steps: string[];

  constructor() {
    this.started = new Date().getTime();
    this.rotors["R01"] = new Rotor({
      id: "R01",
      ticks: 2,
      state: 1
    });
    this.circuits["R01"] = new Circuit({
      dial: this.rotors["R01"],
      rotors: []
    });
  }

  ngOnInit() {
  }

  onDial(id: string) {
    this.circuits[id].dial.rotate();
  }

}
