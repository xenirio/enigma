import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionScoreService {
  $level = new ReplaySubject<number>();
  
  level: number;
  time: number;
  steps: number;
  answer: number;

  constructor() { }
}
