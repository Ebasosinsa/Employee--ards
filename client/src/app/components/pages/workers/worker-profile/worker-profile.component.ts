import { Component } from '@angular/core';

/* Страница профиля работника компании */
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.scss',
})
export class WorkerProfileComponent {
  condition: boolean = false;
  worker_buttons = WorkerProfileBtn;
  ngOnInit() {}
  selectedButton!: WorkerProfileBtnClass;
  WorkerProfileBtnSelect(button: WorkerProfileBtnClass) {
    this.selectedButton = button;
    console.log(this.selectedButton);
    console.log(this.worker_buttons);
    this.condition = !this.condition;
  }
}

class WorkerProfileBtnClass {
  id!: number;
  name_btn!: string;
}

const WorkerProfileBtn: WorkerProfileBtnClass[] = [
  { id: 1, name_btn: 'Формирование бланков' },
  { id: 2, name_btn: 'Сканкопии протоколов и журналов' },
  { id: 3, name_btn: 'Данные об Образовании' },
  { id: 4, name_btn: 'Данные о Повышении квалификации' },
  { id: 5, name_btn: 'Данные о Медосмотрах' },
  { id: 6, name_btn: 'Данные об Охране Труда 2023' },
  { id: 7, name_btn: 'Данные об Охране Труда для ВОДОЛАЗОВ ' },
  { id: 8, name_btn: 'Данные о Пожарно-Техническом минимуме ' },
  { id: 9, name_btn: 'Данные о НАКС' },
  { id: 10, name_btn: 'Данные об Аттестации в РОСТЕХНАДЗОРЕ' },
  { id: 11, name_btn: 'Данные ВИК на объектах РМРС, РРР, РОСТЕХНАДЗОРА' },
  { id: 12, name_btn: 'Данные УЗК на объектах РМРС, РРР, РОСТЕХНАДЗОРА' },
  { id: 13, name_btn: 'Данные об Электробезопасности' },
  { id: 14, name_btn: 'Данные о Высоте' },
  { id: 15, name_btn: 'Данные о Водительских удостоверениях' },
  { id: 16, name_btn: 'Данные об Оказании первой помощи' },
  { id: 17, name_btn: 'Данные о НОСТРОЙ' },
  { id: 18, name_btn: 'Данные о НОПРИЗ' },
  { id: 19, name_btn: 'Данные о выданных ТМЦ ' },
];
