import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataFilterService {
  filter: any;
  constructor() {}

  /* filterArrayByColumn<T>(array: T[], columnName: keyof T, value: any): T[] {
     //константы фильтрации массива
  const forbiddenChars = '\\[\\]{}'; // Исключить при поиске [ и ], а также { и }
  const regexStr = value + `[^${forbiddenChars}]`;
  const regex = new RegExp(regexStr, 'gi');
  //Фильтрация массива
  this.filter = this.inputArr.filter((n) => {
    //Определяем, совпадает ли, то что мы занесли в инпут
    //с названием профессий внутри массива
    return n[columnName].match(regex);
  });
  }
}*/

  filterArrayByColumn(array: any, columnName: string, value: any): any[] {
    console.log(array, columnName, value);
    // Определяем запрещённые символы
    const forbiddenChars = '\\[\\]{}';
    // Создаём регулярное выражение с исключением запрещённых символов
    const regexStr = value + `[^${forbiddenChars}]`;
    const regex = new RegExp(regexStr, 'gi');

    // Фильтрация массива по регулярному выражению
    return array.filter((item: any) => {
      return String(item[columnName]).match(regex);
    });
  }
}
