import { Component } from '@angular/core';
import { workerinfo } from '../../../models/workerinfo';
import { WorkerInfoService } from '../../../service/WorkerInfo/worker-info.service';
import { ConvertedFullnameService } from '../../../service/Converted/converted-FullName/converted-fullname.service';
import { ConvertedDataProfileService } from '../../../service/Converted/converted-departament/converted-dataprofile.service';
import { WorkerPositionsFilterService } from '../../../service/worker-positions-filter/worker-positions-filter.service';
import { PopupService } from '../../../service/PopUp/popup.service';
/* Главная страница картотеки (Все карты базы)) */

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss',
})
export class WorkersComponent {
  WorkerInfos!: workerinfo[];
  WorkersCards: any;
  notFullName: string;
  category: string;

  keyallpositions: any[] = [];
  GtPosition: any[] = [];
  AfPosition: any[] = [];
  EtcPosition: any[] = [];

  allpositions: any[];
  convertedpositions: string;
  converteddatestring: string;
  constructor(
    private WorkerInfoService: WorkerInfoService,
    private convertFullNameService: ConvertedFullnameService,
    private convertDataProfileService: ConvertedDataProfileService,
    private positionsfilterService: WorkerPositionsFilterService,
    private popupService: PopupService
  ) {}

  getAllWorker() {
    this.WorkerInfoService.getAllProfile().subscribe({
      next: (data) => {
        this.WorkersCards = data;
        // Выполните здесь последующие действия после получения данных
        this.performAdditionalActions();
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
      /*(data) => {
        console.log(data);
        this.workerProfile = data;*/
    });
  }

  ngOnInit(): void {
    this.getAllWorker();
    this.getAllPositions();
  }

  performAdditionalActions() {
    this.getAllPositions();
  }

  getAllPositions() {
    this.positionsfilterService.getAllPositions().subscribe((data: any) => {
      this.allpositions = data;
      this.keyallpositions = Object.keys(this.allpositions);
      console.log(this.keyallpositions);
      console.log('alllll positions!!!!!!!', this.allpositions);
    });
  }

  convertFullName(fullName: string) {
    this.notFullName = this.convertFullNameService.convertFullName(fullName);
    return this.notFullName;
  }
  convertCategory(categories: number) {
    if (categories === 1) {
      this.category = 'compass';
    }
    if (categories === 2) {
      this.category = 'spanner';
    }
    return this.category;
  }

  convertedPositions(positions: number, departament: number): string {
    if (this.allpositions && positions) {
      this.convertedpositions =
        this.convertDataProfileService.convertedOutPutString(
          positions,
          this.allpositions[this.keyallpositions[departament - 1]]
        );
    }
    return this.convertedpositions;
  }

  convertedDate(datestring: string): string {
    if (datestring) {
      this.converteddatestring =
        this.convertDataProfileService.convertedOutPutDate(datestring);
    }
    return this.converteddatestring;
  }

  // Popup content!!!

  isModalOpen = false;
  currentName: string | null = null;

  openPopup(popupName: string): void {
    console.log(popupName);
    this.currentName = popupName;
    this.isModalOpen = true;
    this.popupService.openModal();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.popupService.closeModal();
  }

  // mockWorkersCards: mockWorkersCard[] = [
  //   {
  //     id: 1,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 2,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 3,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },

  //   {
  //     id: 4,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 5,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 6,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 7,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 8,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 9,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 10,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 1,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 2,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 3,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },

  //   {
  //     id: 4,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 5,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 6,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 7,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 8,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  //   {
  //     id: 9,
  //     fio: 'Анфалова Е.В.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Начальное профессиональное',
  //     job: 'Инженер отдела охраны окружающей среды, охраны труда и пожарной безопасности',
  //     itr: 'spanner',
  //   },
  //   {
  //     id: 10,
  //     fio: 'Абрамовская Н.А.',
  //     dateHBD: '28.10.1961г.',
  //     education: 'Высшее',
  //     job: 'Архивариус',
  //     itr: 'compass',
  //   },
  // ];
}

/*Уточнить вопрос про выборку между рабоичими и итр, как лучше это сделать */
