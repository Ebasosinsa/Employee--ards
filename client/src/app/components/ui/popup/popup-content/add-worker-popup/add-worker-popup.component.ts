import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WorkerCategoryService } from '../../../../../service/WorkerCategory/worker-category.service';
import { workercategory } from '../../../../../models/workercategory';
import { WorkerDepartmentService } from '../../../../../service/WorkerDepartment/worker-department.service';
import { workerdepartment } from '../../../../../models/workerdepartment';
import { WorkerInfoService } from '../../../../../service/WorkerInfo/worker-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { workerinfo } from '../../../../../models/workerinfo';
import { WorkerGtPositionsService } from '../../../../../service/WorkerGtPositions/worker-gt-positions.service';
import { workergtpositions } from '../../../../../models/workergtpositions';
import { inputArr } from '../../../../../models/inputArr';
import { debounceTime } from 'rxjs/operators';
import { WorkerPositionsFilterService } from '../../../../../service/worker-positions-filter/worker-positions-filter.service';
//import { FileUploadService } from '../../../../../service/file-upload/file-upload.service';
import { File } from 'buffer';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-worker-popup',
  templateUrl: './add-worker-popup.component.html',
  styleUrl: './add-worker-popup.component.scss',
})
export class AddWorkerPopupComponent {
  @ViewChild('myInputPosition') myInputPosition!: ElementRef;
  /* Публичные свойства */
  formAddWorker = new FormGroup({
    fio_worker: new FormControl('', Validators.required),
    birthday_worker: new FormControl('', Validators.required),
    gender_worker: new FormControl(false),
    departments_worker: new FormControl('', Validators.required),
    categories_worker: new FormControl('', Validators.required),
    date_hiring_worker: new FormControl(),
    positions_worker: new FormControl('', Validators.required),
    competency_worker: new FormControl(''),
    positions_worker_card: new FormControl(''),
    photo_worker: new FormControl(File),
    note_worker: new FormControl(''),
  });

  categories!: workercategory[];
  departments!: workerdepartment[];
  departament: number = 1;
  colums!: string;
  gtpositions!: workergtpositions[];
  positions!: any[];
  positionsrequed!: any[];
  filterPositions!: workergtpositions[];
  filteringWords!: any;
  gtpositionscolums!: string;
  inputArr!: inputArr;
  valuecard: any;
  check: boolean = false;

  birthdayWorkerDate: string = '';
  ageWorker: number | null = null;
  ageWorkerMore18: boolean = false;
  id: number = 0;

  isModuleShowed: boolean = false;
  targetElement: any;
  profile: any;
  elementkeys: any;

  constructor(
    private categoryService: WorkerCategoryService,
    private departmentService: WorkerDepartmentService,
    private workergtpositionsService: WorkerGtPositionsService,
    private workerpositionsfilterService: WorkerPositionsFilterService,
    private profileService: WorkerInfoService,
    //private fileuploadservice: FileUploadService,
    private renderer: Renderer2,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.profile = {
      id_worker: 0,
      fio_worker: '',
      birthday_worker: '',
      gender_worker: false,
      departments_worker: 0,
      positions_worker: 0,
      competency_worker: '',
      categories_worker: 0,
      date_hiring_worker: 0,
      note_worker: '',
      add_date_worker: '',
      photo_worker: null,
      positions_worker_card: '',
    };
  }

  ngOnInit(): void {
    this.getDepartment();
    this.getCategory();
    /* this.getGtPositions();*/
    this.subscribedformAddWorkerPositions();
    this.subscribedformAddWorkerDepartment();
  }
  subscribedformAddWorkerPositions() {
    this.formAddWorker
      .get('positions_worker')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        this.workerpositionsfilterService
          .filterPositions(value, this.departament, this.colums)
          .subscribe((data: any) => {
            this.positions = data;
            console.log('position', this.positions);
          });
      });
  }

  subscribedformAddWorkerDepartment() {
    this.formAddWorker
      .get('departments_worker')
      ?.valueChanges.pipe(debounceTime(0))
      .subscribe();
    this.formAddWorker
      .get('departments_worker')
      ?.valueChanges.pipe(debounceTime(0))
      .subscribe((value) => {
        console.log('value departament', value);
        if (value == 'ООО «ГТ Север»') {
          console.log('ООО «ГТ Север»');
          this.departament = 1;
          this.colums = 'name_gt_worker_positions';
          this.workerpositionsfilterService
            .getPositions(this.departament)
            .subscribe((data: any) => {
              this.positions = data;
              this.positionsrequed = this.positions;
              this.formAddWorker.get('positions_worker')?.setValue('');
            });
        }
        if (value == 'ООО «Арктик-Флот»') {
          console.log('ООО «Арктик-Флот»');
          this.departament = 2;
          this.colums = 'name_af_worker_positions';
          this.workerpositionsfilterService
            .getPositions(this.departament)
            .subscribe((data: any) => {
              this.positions = data;
              this.positionsrequed = this.positions;
              this.formAddWorker.get('positions_worker')?.setValue('');
            });
        }
        if (value == 'ООО "ЭТЦ"АЛЬФА"') {
          console.log('ООО "ЭТЦ"АЛЬФА"');
          this.departament = 3;
          this.colums = 'name_ets_worker_positions';
          this.workerpositionsfilterService
            .getPositions(this.departament)
            .subscribe((data: any) => {
              this.positions = data;
              this.positionsrequed = this.positions;
              this.formAddWorker.get('positions_worker')?.setValue('');
            });
        }
      });
  }

  getDepartment() {
    this.departmentService.getDepartment().subscribe((data) => {
      this.departments = data;
      console.log(this.departments);
    });
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  changeCardWorker(valuecard: any) {
    this.valuecard = valuecard;
    this.formAddWorker.get('positions_worker_card')?.setValue(valuecard);
  }
  /* getGtPositions() {
this.workergtpositionsService.getGtPositions().subscribe((data) => {
this.gtpositions = data;
this.positions = this.gtpositions;
});
}*/

  isOpen: boolean = false;
  isChecked: boolean = false;
  isCheckedValue: boolean = false;
  inputFocusActive: boolean = false;
  onSubmit() {
    // Проверка на Валидность формы
    if (this.formAddWorker.invalid) {
      Object.assign(this.profile, this.formAddWorker.value);
      console.log('no add', this.categories);
      console.log('no add', this.departments);
      console.log(this.profile.categories_worker);
      if (this.profile.categories_worker) {
        this.profile.categories_worker;
        this.categories.forEach((element) => {
          if (
            element.name_categories ===
            this.formAddWorker.value.categories_worker
          ) {
            console.log(element);
            this.profile.categories_worker = element.id_categories;
          }
        });
      }

      return console.log('asdasd', this.profile);
    }
    // Подгонка данных для Базы, проверки на Новые значения

    Object.assign(this.profile, this.formAddWorker.value);
    console.log('no add', this.profile);
    if (this.profile) {
      // Функция для проверки ФИО на русском языке
      if (this.profile.fio_worker) {
        function isValidFIO(fio: string): boolean {
          // Регулярное выражение для проверки ФИО на русском
          const fioRegex = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/;
          return fioRegex.test(fio);
        }
        if (isValidFIO(this.profile.fio_worker)) {
          console.log('ФИО корректно.');
        } else {
          console.log('ФИО некорректно.');
        }
      }
      // Функция проверки возроста работнка
      if (this.profile.birthday_worker) {
        this.birthdayWorkerDate = this.profile.birthday_worker;
        this.ageWorker = getAge(this.birthdayWorkerDate);
        this.ageWorker < 18;

        this.ageWorker >= 18
          ? (this.ageWorkerMore18 = true)
          : (this.ageWorkerMore18 = false);

        console.log(this.ageWorkerMore18);
        function getAge(birthDate: string): number {
          const today = new Date();
          const birthDateObj = new Date(birthDate);
          let age = today.getFullYear() - birthDateObj.getFullYear();
          const monthDiff = today.getMonth() - birthDateObj.getMonth();

          // Если день рождения еще не был в текущем году
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
          ) {
            age--;
          }

          return age;
        }
      }

      // Изменение данных филиала сотрудника
      if (this.profile.departments_worker) {
        this.departments.forEach((element) => {
          if (
            element.name_departments ===
            this.formAddWorker.value.departments_worker
          ) {
            console.log(element);
            this.profile.departments_worker = element.id_departments;
          }
        });
      }
      // Изменение данных о категории сотрудника
      if (this.profile.categories_worker) {
        this.categories.forEach((element) => {
          if (
            element.name_categories ===
            this.formAddWorker.value.categories_worker
          ) {
            console.log(element);
            this.profile.categories_worker = element.id_categories;
          }
        });
      }
      // Изменение данных о должности сотрудника  element.elementkeys[0][1]
      if (this.profile.positions_worker) {
        this.profile.positions_worker;
        console.log(this.positionsrequed);
        this.elementkeys =
          this.positions?.length > 0 ? Object.keys(this.positions[0]) : [];
        //Проверяем, есть ли должность в базе выбранного филиала
        this.check = this.positions.every((element) => {
          if (element[this.elementkeys[1]] == this.profile.positions_worker) {
            //Если есть, то присваиваем ей ид из базы
            this.profile.positions_worker = element[this.elementkeys[0]];
            console.log(this.elementkeys);
            console.log(' add', this.profile);
          }
        });
        //Если должность есть в базе - this.proverka = false(добавлять не нужно), если нет - true (нужно добавить)
        //Если должности нету - добавляем ее в базу
        if (this.check) {
          console.log('proverka', this.check);
          console.log('Добавить В Сервис Добавление Должностей!!!!!!!!');
          this.profile.positions_worker = 1;
        }
      }
      if (this.profile.photo_worker) {
        console.log(this.profile.photo_worker);
      }
    }

    console.log(' add', this.profile);
    // Определение - добавление или обновление и дальнейшее направление формы на сервер
    if (this.id) {
      this.updateProfile();
    } else {
      console.log(this.profile);
      this.addProfile();
      this.getProfile();
    }
  }

  getProfile() {
    this.profileService.getProfile().subscribe((data) => {
      console.log(data);
      if (data) {
        this.router.navigate(['']);
      }
    });
  }

  addProfile() {
    console.log('1234556676', this.profile);
    this.profile = this.profileService
      .addProfile(this.profile)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.router.navigate(['']);
        }
      });
    /* if (this.profile.photo_worker) {
this.fileuploadservice.upload(this.profile.photo_worker).subscribe({
next: (response) => {
console.log('Все пришло, збс', response);
},
error: (err) => {
console.error('Ошибка при загрузке файла', err);
},
});
}*/
  }

  updateProfile() {
    this.profileService.updateProfile(this.profile).subscribe((data) => {
      if (data) {
        this.router.navigate(['']);
      }
    });
  }
}
