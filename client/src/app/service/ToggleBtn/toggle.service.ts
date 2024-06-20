import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
/*РУДИМЕНТ, ЮЗАЛСЯ ДЛЯ ПРИМЕРА ПОТОМ УДАЛИТЬ!!!!*/
@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private switchToggleSubject = new BehaviorSubject<boolean>(false);
  public switchToggle$: Observable<boolean> =
    this.switchToggleSubject.asObservable();

  constructor() {}

  /*ToggleAddWorker() {
    this.switchToggleSubject.value
      ? this.switchToggleSubject.next(false)
      : this.switchToggleSubject.next(true);
    console.log('click1111', this.switchToggleSubject.value);
  }*/
}
