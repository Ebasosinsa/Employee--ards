import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertedFullnameService {
  constructor() {}
  fullName: string = '';
  convertedFullName: string = '';

  convertFullName(fullName: string) {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 3) {
      const [lastName, firstName, middleName] = parts;
      return (this.convertedFullName = `${lastName} ${firstName[0]}.${middleName[0]}.`);
    } else {
      return (this.convertedFullName = 'Неверный формат ФИО');
    }
  }
}
