import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionScoreService {
  time: number;
  steps: number;
  answer: number;

  constructor() { }
}
