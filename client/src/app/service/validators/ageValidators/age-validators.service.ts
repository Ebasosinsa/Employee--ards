import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AgeValidatorsService {
  constructor() {}

  ageValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Если значение не введено, считаем его валидным
      }

      const birthdate = new Date(control.value);
      const today = new Date();

      let age = today.getFullYear() - birthdate.getFullYear();
      const monthDifference = today.getMonth() - birthdate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      if (
        birthdate.getFullYear() < 1900 ||
        birthdate.getFullYear() > today.getFullYear()
      ) {
        return { invalidYear: true };
      }
      if (age < minAge) {
        return { invalidAgeMin: true };
      }
      if (age > maxAge) {
        return { invalidAgeMax: true };
      }

      return null;
    };
  }
}
