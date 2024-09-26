import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkerCategoryService } from '../../../../../service/WorkerCategory/worker-category.service';
import { workercategory } from '../../../../../models/workercategory';
import { WorkerDepartmentService } from '../../../../../service/WorkerDepartment/worker-department.service';
import { workerdepartment } from '../../../../../models/workerdepartment';
import { WorkerInfoService } from '../../../../../service/WorkerInfo/worker-info.service';
import { WorkerGtPositionsService } from '../../../../../service/WorkerGtPositions/worker-gt-positions.service';
import { workergtpositions } from '../../../../../models/workergtpositions';
import { inputArr } from '../../../../../models/inputArr';
import { debounceTime, map, mergeAll, mergeMap } from 'rxjs/operators';
import { WorkerPositionsFilterService } from '../../../../../service/worker-positions-filter/worker-positions-filter.service';
import { File } from 'buffer';

import { AgeValidatorsService } from '../../../../../service/validators/ageValidators/age-validators.service';
import { Router } from '@angular/router';
import { BooleanNumberService } from '../../../../../service/boolean-number/boolean-number.service';
import { PopupService } from '../../../../../service/PopUp/popup.service';
import { NotificationService } from '../../../../../service/notification/notification.service';
import { workerinfo } from '../../../../../models/workerinfo';
import { ConvertedDataProfileService } from '../../../../../service/Converted/converted-departament/converted-dataprofile.service';
import { combineLatest, forkJoin, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-worker-popup',
  templateUrl: './add-worker-popup.component.html',
  styleUrl: './add-worker-popup.component.scss',
})
export class AddWorkerPopupComponent {
  @ViewChild('myInputPosition') myInputPosition!: ElementRef;
  @Input() workerProfileId?: any;
  @Output() closeModalEvent = new EventEmitter();
  @Output() updateWorkerCards = new EventEmitter();
  /* Публичные свойства */
  formAddWorker = new FormGroup({
    fio_worker: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/),
    ]),
    birthday_worker: new FormControl('', [
      Validators.required,
      this.agevalidatorsService.ageValidator(18, 65), // Проверка на возраст от 18 до 65 лет
    ]),
    gender_worker: new FormControl(false),
    departments_worker: new FormControl('', Validators.required),
    categories_worker: new FormControl('', Validators.required),
    date_hiring_worker: new FormControl(''),
    positions_worker: new FormControl('', Validators.required),
    competency_worker: new FormControl(''),
    positions_worker_card: new FormControl(''),
    photo_worker: new FormControl(null),
    note_worker: new FormControl(''),
  });
  workerProfile: any;
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
  errr: [boolean, string];
  birthdayWorkerDate: string;
  ageWorker: number | null = null;
  ageWorkerMore18: boolean = false;

  isModuleShowed: boolean = false;
  targetElement: any;
  profile: any;
  elementkeys: any;
  uplphoto: string | null = null;
  currentFile?: File;
  message = '';
  formSubmitted: boolean = false;
  validtext: string;

  constructor(
    private categoryService: WorkerCategoryService,
    private departmentService: WorkerDepartmentService,
    private workerpositionsfilterService: WorkerPositionsFilterService,
    private profileService: WorkerInfoService,
    public booleannumberService: BooleanNumberService,
    private workerinfoService: WorkerInfoService,
    private notificationservice: NotificationService,
    private convertDataProfileService: ConvertedDataProfileService,
    //Сервисы для валидации формы
    private agevalidatorsService: AgeValidatorsService,

    private router: Router
  ) {
    this.profile = {
      id_worker: 0,
      fio_worker: '',
      birthday_worker: '',
      gender_worker: false,
      departments_worker: 0,
      positions_worker: 0,
      competency_worker: null,
      categories_worker: 0,
      date_hiring_worker: '',
      note_worker: '',
      add_date_worker: '',
      photo_worker: null,
      positions_worker_card: '',
    };
  }

  ngOnInit() {
    if (this.workerProfileId) {
      console.log('edit');
      this.getInfoForEdit();
    } else {
      console.log('add');
      this.getDepartment();
      this.getCategory();
      this.subscribedformAddWorkerPositions();
      this.subscribedformAddWorkerDepartment();
    }
    // this.getDepartment();
    // this.getCategory();
    // this.subscribedformAddWorkerPositions();
    // this.subscribedformAddWorkerDepartment();
    // this.getProfile();
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
  getInfoForEdit() {
    if (this.workerProfileId) {
      const profile$ = this.workerinfoService.getProfile(this.workerProfileId);
      const department$ = this.departmentService.getDepartment();
      const category$ = this.categoryService.getCategory();

      // Добавьте другие наблюдаемые для других массивов данных, если необходимо

      forkJoin([profile$, department$, category$])
        .pipe(
          mergeMap(([profile, department, category]) => {
            return this.workerpositionsfilterService
              .getPositions(profile.departments_worker)
              .pipe(
                map((positions) => [profile, department, category, positions])
              );
          })
        )
        .subscribe(([profile, departments, categories, positions]) => {
          this.workerProfile = profile;
          this.departments = departments;
          this.categories = categories;
          this.positions = positions;
          this.positionsrequed = this.positions;
          // Назначьте другие массивы данных их соответствующим переменным
          console.log(
            ['profile', this.workerProfile],
            ['department', this.departments],
            ['category', this.categories],
            ['positions', this.positions]
          );

          // Теперь, когда все данные загружены, вызовите функцию editworkerprofile
          this.editworkerprofile(
            this.workerProfile,
            this.departments,
            this.categories,
            this.positions /* другие массивы данных */
          );
        });
    }
    this.subscribedformAddWorkerPositions();
  }

  changeCardWorker(valuecard: any) {
    this.valuecard = valuecard;
    this.formAddWorker.get('positions_worker_card')?.setValue(valuecard);
  }

  editworkerprofile(
    workerProfile: any,
    departament: any,
    categories: any,
    positions: any
  ) {
    console.log(workerProfile, departament, categories, positions);
    this.departments = departament;
    this.categories = categories;
    this.positions = positions;
    if (workerProfile) {
      console.log('hui', workerProfile);
      this.uplphoto = workerProfile.photo_worker;
      Object.entries(workerProfile).forEach(([key, value]) => {
        console.log(key, value);
        if (key === 'departments_worker') {
          this.departments.forEach((element) => {
            console.log('1111111111111111', value);
            if (element.id_departments === value) {
              this.departament = element.id_departments;
              value = element.name_departments;
            }
          });
        }
        if (key === 'categories_worker') {
          this.categories.forEach((element) => {
            if (element.id_categories === value) {
              value = element.name_categories;
            }
          });
        }
        if (key === 'positions_worker') {
          this.elementkeys =
            this.positions?.length > 0 ? Object.keys(this.positions[1]) : [];
          console.log(this.elementkeys[0]);
          this.positions.forEach((element) => {
            if (element[this.elementkeys[0]] === value) {
              value = element[this.elementkeys[1]];
              console.log(value);
            }
          });
        }
        this.formAddWorker.patchValue({
          [key]: value,
        });
      });
    }
    console.log(this.departments);
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
  logErrors() {
    const controls = this.formAddWorker.controls;
    for (const inputName in controls) {
      if (controls.fio_worker.invalid && inputName == 'fio_worker') {
        console.error(`Error in ${inputName}:`, controls.fio_worker.errors);
      }
      if (controls.birthday_worker.invalid && inputName == 'birthday_worker') {
        console.error(
          `Error in ${inputName}:`,
          controls.birthday_worker.errors
        );
      }
      if (
        controls.departments_worker.invalid &&
        inputName == 'departments_worker'
      ) {
        console.error(
          `Error in ${inputName}:`,
          controls.departments_worker.errors
        );
      }
      if (
        controls.categories_worker.invalid &&
        inputName == 'categories_worker'
      ) {
        console.error(
          `Error in ${inputName}:`,
          controls.categories_worker.errors
        );
      }
      if (
        controls.positions_worker.invalid &&
        inputName == 'positions_worker'
      ) {
        console.error(
          `Error in ${inputName}:`,
          controls.positions_worker.errors
        );
      }
    }
  }
  onSubmit() {
    //Подготавливаем форму к отправке на сервер
    const formData = new FormData();
    //Затрагиваем все поля формы для проверки
    this.formAddWorker.markAllAsTouched();
    //Даем валидаторам понять, что они могут отрабатывать
    this.formSubmitted = true;
    // Проверка на Валидность формы
    // Если валидна - продолжаем отправку
    if (this.formAddWorker.invalid) {
      this.showNotification(
        'Не все обязательные поля заполнены!',
        'OK',
        'errore'
      );
      return this.logErrors();
    }
    console.log('this.formAddWorker', this.formAddWorker.value);
    if (this.workerProfile.id_worker) {
      formData.append('id_worker', this.workerProfile.id_worker);
    }
    console.log('this.formAddWorker', this.formAddWorker.value);
    Object.assign(this.profile, this.formAddWorker.value);
    console.log('profile123', this.profile);

    Object.entries(this.profile).forEach(([key, value]) => {
      formData.append(key, this.modifyData(key, value));
    });

    // Подгонка данных для Базы, проверки на Новые значения

    // Функция для проверки ФИО на русском языке
    // if (this.formAddWorker.value.fio_worker) {
    //   function isValidFIO(fio: string): boolean {
    //     // Регулярное выражение для проверки ФИО на русском
    //     const fioRegex = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/;
    //     return fioRegex.test(fio);
    //   }
    //   if (isValidFIO(this.formAddWorker.value.fio_worker)) {
    //     console.log('ФИО корректно.');
    //     formData.append('fio_worker', this.formAddWorker.value.fio_worker);
    //   } else {
    //     console.log('ФИО некорректно.');
    //   }
    // }
    // Функция проверки возроста работнка

    //formData.append('fio_worker', this.profile.fio_worker);

    // if (this.formAddWorker.value.birthday_worker) {
    //   this.birthdayWorkerDate = this.formAddWorker.value.birthday_worker;
    //   this.ageWorker = getAge(this.birthdayWorkerDate);
    //   this.ageWorker < 18;

    //   this.ageWorker >= 18
    //     ? (this.ageWorkerMore18 = true)
    //     : (this.ageWorkerMore18 = false);

    //   console.log(this.ageWorkerMore18);
    //   function getAge(birthDate: string): number {
    //     const today = new Date();
    //     const birthDateObj = new Date(birthDate);
    //     let age = today.getFullYear() - birthDateObj.getFullYear();
    //     const monthDiff = today.getMonth() - birthDateObj.getMonth();

    //     // Если день рождения еще не был в текущем году
    //     if (
    //       monthDiff < 0 ||
    //       (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    //     ) {
    //       age--;
    //     }

    //     return age;
    //   }
    //   formData.append('birthday_worker', this.birthdayWorkerDate);
    // }

    // Изменение данных филиала сотрудника
    if (this.formAddWorker.value.departments_worker) {
      this.departments.forEach((element) => {
        if (
          element.name_departments ===
          this.formAddWorker.value.departments_worker
        ) {
          console.log(element);
          this.profile.departments_worker = element.id_departments;
          formData.append(
            'departments_worker',
            this.profile.departments_worker
          );
        }
      });
    }
    // Изменение данных о категории сотрудника
    if (this.formAddWorker.value.categories_worker) {
      this.profile.categories_worker =
        this.formAddWorker.value.categories_worker;
      this.categories.forEach((element) => {
        if (element.name_categories === this.profile.categories_worker) {
          console.log(element);
          this.profile.categories_worker = element.id_categories;
          formData.append('categories_worker', this.profile.categories_worker);
        }
      });
    }
    // Изменение данных о должности сотрудника  element.elementkeys[0][1]
    if (this.formAddWorker.value.positions_worker) {
      this.profile.positions_worker = this.formAddWorker.value.positions_worker;
      console.log(this.positionsrequed);
      this.elementkeys =
        this.positions?.length > 0 ? Object.keys(this.positions[0]) : [];
      console.log(this.positions);
      //Проверяем, есть ли должность в базе выбранного филиала
      this.check = this.positions.every((element) => {
        console.log(this.profile.positions_worker);
        if (element[this.elementkeys[1]] === this.profile.positions_worker) {
          //Если есть, то присваиваем ей ид из базы
          this.profile.positions_worker = element[this.elementkeys[0]];
          console.log(this.elementkeys);
          console.log(' add', this.profile);
        }
      });
      console.log(this.elementkeys);
      console.log(this.check);
      //Если должность есть в базе - this.proverka = false(добавлять не нужно), если нет - true (нужно добавить)
      //Если должности нету - добавляем ее в базу
      if (this.check) {
        console.log('proverka', this.check);
        console.log('Добавить В Сервис Добавление Должностей!!!!!!!!');
        this.profile.positions_worker = 1;
      }
      formData.append('positions_worker', this.profile.positions_worker);
    }
    if (this.formAddWorker.value.photo_worker) {
      this.profile.photo_worker = this.formAddWorker.value.photo_worker;
      console.log(this.profile.photo_worker);
      console.log(
        typeof this.profile.photo_worker === 'object' &&
          this.profile.photo_worker instanceof Blob
      );
      if (
        !this.workerProfile ||
        (typeof this.profile.photo_worker === 'object' &&
          this.profile.photo_worker instanceof Blob)
      ) {
        formData.append(
          'file',
          this.profile.photo_worker,
          this.profile.photo_worker.name
        );
      }
      console.log('FormData content:', formData.get('file'));
    }
    //Изменение данных пола работника
    //Если значение FALSE(0) - Мужской //Если значение TRUE(1) - женский
    // this.profile.gender_worker = this.booleannumberService.BooleanNumber(
    //   this.profile.gender_worker
    // );
    //formData.append('gender_worker', this.profile.gender_worker);

    // this.profile.date_hiring_worker =
    //   this.formAddWorker.value.date_hiring_worker;
    // console.log('datehyr', this.formAddWorker.value.date_hiring_worker);
    // formData.append('date_hiring_worker', this.profile.date_hiring_worker);
    // console.log(formData.get('date_hiring_worker'));
    // this.profile.competency_worker = this.formAddWorker.value.competency_worker;
    // formData.append('competency_worker', this.profile.competency_worker);
    // this.profile.positions_worker_card =
    //   this.formAddWorker.value.positions_worker_card;
    // formData.append(
    //   'positions_worker_card',
    //   this.profile.positions_worker_card
    // );
    // formData.append('note_worker', this.profile.note_worker);

    // Определение - добавление или обновление и дальнейшее направление формы на сервер
    console.log(formData.get('fio_worker'));

    if (formData) {
      if (formData && !this.workerProfile?.id_worker) {
        this.addProfile(formData);
      } else {
        //this.updateProfile(this.workerProfile?.id_worker, formData);
        console.log('изменение', formData);
        formData.append('id_worker', this.workerProfile?.id_worker);
        console.log(formData.get('id_worker'));
        formData.forEach((value, key) => {
          console.log(`Ключ: ${key}, Значение: ${value}`);
        });
        this.addProfile(formData);
      }
    }
  }

  onReset() {
    //Закрываем модальное окно
    this.closeModalEvent.emit();
    //Возвращаем в исходное значение ошибок
    this.formSubmitted = false;
    //Сброс значений формы
    this.formAddWorker.reset();
    //Сброс валидаторов формы
    this.formAddWorker.markAsPristine();
    this.formAddWorker.markAsUntouched();
  }

  // getProfile() {
  //   this.profileService.getProfile().subscribe((data) => {
  //     console.log(data);
  //     if (data) {
  //       /*this.router.navigate(['']);*/
  //     }
  //   });
  // }

  addProfile(formData: any) {
    console.log('1234556676', formData);

    this.profileService.addProfile(formData).subscribe((data) => {
      console.log(data);
      if (data) {
        this.closeModalEvent.emit();
        this.updateWorkerCards.emit();
        this.router.navigate(['']);
        this.showNotification('Сотрудник успешно добавлен!', 'Oк', 'success');
      }
    });
  }

  updateProfile(id: number, updateprofile: any) {
    console.log(id);
    console.log('изменение', updateprofile.get('fio_worker'));

    this.profileService.updateProfile(id, updateprofile).subscribe((data) => {
      if (data) {
        // this.closeModalEvent.emit();
        // this.updateWorkerCards.emit();
        console.log(data);
        this.showNotification('Данные обновлены!', 'Oк', 'success');
      }
    });
  }
  /*this.profile = this.profileService
      .addProfile(this.profile)
      .subscribe((data) => {
        console.log(data);
        /*  if (data) {
          this.router.navigate(['']);
        }*/
  /*});
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
  getErrorMessage(controlName: any): any {
    const control = this.formAddWorker.get(controlName);
    if (control?.errors) {
      if (controlName === 'fio_worker') {
        if (control?.errors['pattern']) {
          return '- не корректно';
        }
      }
      if (controlName === 'birthday_worker') {
        if (control.errors['invalidAgeMin']) {
          return '- меньше 18 лет';
        }
        if (control.errors['invalidAgeMax']) {
          return '- больше 65 лет';
        }
        if (control.errors['invalidYear']) {
          return '- не корректный год';
        }
      }
      if (controlName === 'departments_worker') {
        if (control?.errors['pattern']) {
          return '- не корректно';
        }
      }
      // if (controlName === 'categories_worker') {
      //   if (control?.errors['pattern']) {
      //     return 'не корректно';
      //   }
      // }
      // if (controlName === 'positions_worker') {
      //   if (control?.errors['pattern']) {
      //     return 'не корректно';
      //   }
      // }
      if (control.errors['required']) {
        return '*';
      }
    }
    return 'Позвоните мне, что-то тут не ладно...';
  }

  validerr() {
    if (this.formAddWorker.invalid && this.formSubmitted) {
      this.validtext = 'Не все обязательные поля заполнены!';
      return true;
    }
    this.validtext = '';
    return false;
  }

  //Модифицирование данных
  private modifyData(key: string, value: any): any {
    //Изменение ФИО работника
    // if (key === 'fio_worker') {
    //   return 'u1' + value; // Добавляем префикс к имени пользователя
    // }
    //Изменение данных пола работника
    if (key === 'gender_worker') {
      //Если значение FALSE(0) - Мужской //Если значение TRUE(1) - женский
      return this.booleannumberService.BooleanNumber(value);
    }
    return value; // Для остальных полей оставляем значение без изменений
  }

  showNotification(message: string, action: string, type: string) {
    this.notificationservice.openSnackBar(message, action, type);
  }
  displayStreetName(street: any) {
    return street.name_gt_worker_positions;
  }
}
