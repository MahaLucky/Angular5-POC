import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['World tour', 'Buy a Car', 'Own a Business','No Goal']);
  goal = this.goals.asObservable();

  constructor() {

  }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
