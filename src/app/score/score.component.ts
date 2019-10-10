import { Component, OnInit } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStopwatch, faShoePrints, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { MissionScoreService } from '../mission-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  faStopwatch = faStopwatch;
  faShoePrints = faShoePrints;
  farStar = farStar;
  fasStar = fasStar;

  time: number;
  steps: number;
  compliment: string;

  constructor(private _missionScoreService: MissionScoreService) { }

  ngOnInit() {
    this.time = this._missionScoreService.time;
    this.steps = this._missionScoreService.steps;
  }

  get stars(): number[] {
    let boundary = this._missionScoreService.answer * 6;
    let score = Math.floor((boundary - this.steps) / 6);
    if (score > 5)
      score = 5;
    if (score < 1)
      score = 1;
    let stars = [];
    for (var i = 0; i < score; i++) {
      stars.push(1);
    }

    switch (score) {
      case 5:
        this.compliment = "Excellent!";
        break;
      case 4:
        this.compliment = "Great!";
        break;
      case 3:
        this.compliment = "Nice";
        break;
      case 2:
        this.compliment = "Good";
        break;
      case 1:
        this.compliment = "Fine";
        break;
      default:
        this.compliment = "";
        break;
    }
    if (score == 5) {
      this.compliment = "Excellent!";
    }
    else if (score == 4) {

    }
    return stars;
  }

  onSubmit() {
    let name = "";
    do {
      name = prompt("Player Name:");
    } while (name === "")
  }
}
