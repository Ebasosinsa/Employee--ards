import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPopupDataService {
  constructor() {}

  popupTitles: { [key: string]: string } = {
    addworker: 'Добавление нового сотрудника',
    editworker: 'Редактирование профиля',
    deleteworker: 'Удаление профиля',
  };
  getPopupTitle(currentName: string): string {
    return currentName
      ? this.popupTitles[currentName] || '404 not found'
      : '404 not found';
  }
}
