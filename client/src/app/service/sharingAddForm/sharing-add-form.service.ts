import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingAddFormService {
  private formValueSubject = new BehaviorSubject<any>(null);
  formValue$ = this.formValueSubject.asObservable();

  constructor() {}

  updateFormValue(value: any) {
    this.formValueSubject.next(value);
    console.log('принятые данные', value);
  }
}
