import { Injectable } from '@angular/core';
import { WorkerDepartmentService } from '../../WorkerDepartment/worker-department.service';
import { workerdepartment } from '../../../models/workerdepartment';
import { WorkerPositionsFilterService } from '../../worker-positions-filter/worker-positions-filter.service';
import { workergtpositions } from '../../../models/workergtpositions';

@Injectable({
  providedIn: 'root',
})
export class ConvertedDataProfileService {
  elementkeys: any;
  converteddepartment: string;
  convertedpositions: string;
  convertedelement: string;

  convertedOutPutString(element: number, allelements: any[]) {
    this.elementkeys =
      allelements.length > 0 ? Object.keys(allelements[0]) : [];

    for (let i = 0; i < allelements.length; i++) {
      if (allelements[i][this.elementkeys[0]] === element) {
        this.convertedelement = allelements[i][this.elementkeys[1]];
        return this.convertedelement;
      }
    }
    return 'Error: not found 404';
  }

  convertedOutPutDate(dateString: string) {
    // Разбиваем строку на части
    const parts = dateString.split('-');
    // Меняем местами день и месяц
    const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    return formattedDate;
  }
  convertedInPutDate(dateString: string) {
    // Разбиваем строку на части
    const parts = dateString.split('.');
    // Меняем местами день и месяц
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
  }
  getAgeWithText(birthDateString: string) {
    // Преобразуем строку даты рождения в объект Date
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();
    // Вычисляем разницу в годах
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    // Проверяем, прошло ли уже день рождения в этом году
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    // Определяем правильное слово для возраста
    let ageText;
    if (age % 10 === 1 && age % 100 !== 11) {
      ageText = 'год';
    } else if (
      [2, 3, 4].includes(age % 10) &&
      ![12, 13, 14].includes(age % 100)
    ) {
      ageText = 'года';
    } else {
      ageText = 'лет';
    }

    return `${age} ${ageText}`;
  }
}
