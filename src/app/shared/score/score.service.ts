import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  submit: {
    score(player: string, level: number, time: number, step: number): Observable<boolean>
  }

  constructor(private _apiService: ApiService) {
    this.submit = {
      score: (player: string, level: number, time: number, step: number) => {
        return this._apiService.postRequest('/score/submit', {
          "player": player,
          "level": level,
          "time": time,
          "step": step
        })
          .pipe(
            map(() => {
              return true;
            })
          );
      }
    }
  }
}
