import { Mission, Symbol } from './shared/mission.model';
import { Circuit } from './shared/circuit.model';
import { Component, OnInit } from '@angular/core';
import { Rotor } from './shared/rotor.model';
import { Router } from '@angular/router';

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

  get unlocked(): boolean {
    return this.mission.unlocked;
  }

  constructor(private _router: Router) {
    let tutorialRoters = {
      "R111": new Rotor({
        id: "R111",
        ticks: 2,
        state: 1
      }),
      "R121": new Rotor({
        id: "R121",
        ticks: 2,
        state: 1
      }),
      "R122": new Rotor({
        id: "R122",
        ticks: 2,
        state: 0
      })
    };
    this._missions = [
      new Mission({
        major: 1,
        minor: 1,
        cover: "touch rotor to make it green",
        layout: [
          ["R111"]
        ],
        rotors: {
          "R111": tutorialRoters["R111"]
        },
        circuits: {
          "R111": new Circuit({
            dial: tutorialRoters["R111"],
            rotors: []
          })
        }
      }),
      new Mission({
        major: 1,
        minor: 2,
        cover: "make rotors green",
        layout: [
          ["R121"],
          ["R122"]
        ],
        rotors: {
          "R121": tutorialRoters["R121"],
          "R122": tutorialRoters["R122"]
        },
        circuits: {
          "R121": new Circuit({
            dial: tutorialRoters["R121"],
            rotors: [
              tutorialRoters["R122"]
            ]
          }),
          "R122": new Circuit({
            dial: tutorialRoters["R122"],
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
        if (this.mission.layout[i][j] !== null) {
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
    if (this.unlocked) {
      this.mission.steps = this.steps;
      setTimeout(() => {
        if (this._missions.length === 0) {
          this._router.navigate(['/score']);
        }
        else {
          this.start(this._missions.pop());
        }
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
