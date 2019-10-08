import { Mission, Symbol } from './shared/mission.model';
import { Circuit } from './shared/circuit.model';
import { Component, OnInit } from '@angular/core';
import { Rotor } from './shared/rotor.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private _missions: Mission[] = [];

  mission: Mission;
  positions: any[] = [];
  started: number;
  steps: string[] = [];
  symbol: Symbol;
  cover: string;

  get rotors(): Rotor[] {
    return Object.keys(this.mission.rotors).map(k => this.mission.rotors[k]);
  }

  constructor() {
    let tutorialRoters = {
      "R001": new Rotor({
        id: "R001",
        ticks: 2,
        state: 1
      }),
      "R011": new Rotor({
        id: "R011",
        ticks: 2,
        state: 1
      }),
      "R012": new Rotor({
        id: "R012",
        ticks: 2,
        state: 0
      })
    };
    this._missions = [
      new Mission({
        major: 0,
        minor: 1,
        cover: "touch rotor to make it green",
        layout: [
          [1]
        ],
        rotors: {
          "R001": tutorialRoters["R001"]
        },
        circuits: {
          "R001": new Circuit({
            dial: tutorialRoters["R001"],
            rotors: []
          })
        }
      }),
      new Mission({
        major: 0,
        minor: 2,
        cover: "make rotors all green",
        layout: [
          [1],
          [1]
        ],
        rotors: {
          "R011": tutorialRoters["R011"],
          "R012": tutorialRoters["R012"]
        },
        circuits: {
          "R011": new Circuit({
            dial: tutorialRoters["R011"],
            rotors: [
              tutorialRoters["R012"]
            ]
          }),
          "R012": new Circuit({
            dial: tutorialRoters["R012"],
            rotors: []
          })
        }
      })
    ];
    this._missions = this._missions.reverse();
  }

  ngOnInit() {
    this.start(this._missions.pop());
    this.started = new Date().getTime();
  }

  start(mission: Mission) {
    this.mission = mission;
    this.cover = mission.cover;
    this.steps = [];
    this.positions = [];

    let rows = this.mission.layout.length;
    let columns = this.mission.layout[0].length;
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
        if (this.mission.layout[i][j] === 1) {
          this.positions.push({
            y: start_point.y + (i * margin),
            x: start_point.x + (j * margin)
          });
        }
      }
    }
  }

  onDial(id: string) {
    this.mission.dial(id);
    this.steps.push(id);
    if (this.mission.unlocked && this._missions.length > 0) {
      this.mission.steps = this.steps;
      setTimeout(() => {
        this.start(this._missions.pop());
      }, 1000);
    }
  }

  onReset() {
    this.steps = [];
    this.symbol = Symbol.Reset;
    this.cover = "reset";

    this.mission.reset();
  }
}
