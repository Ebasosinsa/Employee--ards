import { Component } from '@angular/core';

interface mockWorkersCard {
  id: number;
  fio: string;
  dateHBD: string;
  education: string;
  job: string;
  itr: string;
}

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss',
})
export class WorkersComponent {
  mockWorkersCards: mockWorkersCard[] = [
    {
      id: 1,
      fio: 'Анфалова Е.В.',
      dateHBD: '28.10.1961г.',
      education: 'Начальное профессиональное',
      job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
      itr: 'spanner',
    },
    {
      id: 2,
      fio: 'Анфалова Е.В.',
      dateHBD: '28.10.1961г.',
      education: 'Начальное профессиональное',
      job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
      itr: 'spanner',
    },
    {
      id: 2,
      fio: 'Абрамовская Н.А.',
      dateHBD: '28.10.1961г.',
      education: 'Высшее',
      job: 'Архивариус',
      itr: 'compass',
    },
    {
      id: 4,
      fio: 'Абрамовская Н.А.',
      dateHBD: '28.10.1961г.',
      education: 'Высшее',
      job: 'Архивариус',
      itr: 'compass',
    },
    {
      id: 5,
      fio: 'Анфалова Е.В.',
      dateHBD: '28.10.1961г.',
      education: 'Начальное профессиональное',
      job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
      itr: 'spanner',
    },
    {
      id: 6,
      fio: 'Абрамовская Н.А.',
      dateHBD: '28.10.1961г.',
      education: 'Высшее',
      job: 'Архивариус',
      itr: 'compass',
    },
    {
      id: 7,
      fio: 'Анфалова Е.В.',
      dateHBD: '28.10.1961г.',
      education: 'Начальное профессиональное',
      job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
      itr: 'spanner',
    },
    {
      id: 8,
      fio: 'Абрамовская Н.А.',
      dateHBD: '28.10.1961г.',
      education: 'Высшее',
      job: 'Архивариус',
      itr: 'compass',
    },
    {
      id: 9,
      fio: 'Анфалова Е.В.',
      dateHBD: '28.10.1961г.',
      education: 'Начальное профессиональное',
      job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
      itr: 'spanner',
    },
    {
      id: 10,
      fio: 'Абрамовская Н.А.',
      dateHBD: '28.10.1961г.',
      education: 'Высшее',
      job: 'Архивариус',
      itr: 'compass',
    },
  ];
}

/*Уточнить вопрос про выборку между рабоичими и итр, как лучше это сделать */
