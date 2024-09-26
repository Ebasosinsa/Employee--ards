import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooleanNumberService {
  constructor() {}
  BooleanNumber(boolean_number: boolean) {
    if (boolean_number) {
      //console.log('gender service true');
      return 1;
    } else {
      //console.log('gender service false');
      return 0;
    }
  }
  NumberBoolean(number_boolean: number) {
    if (number_boolean) {
      //console.log('gender service 1');
      return true;
    } else {
      //console.log('gender service 1');
      return false;
    }
  }
}
