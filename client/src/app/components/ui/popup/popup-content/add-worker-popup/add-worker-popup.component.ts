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
@Component({
  selector: 'app-add-worker-popup',
  templateUrl: './add-worker-popup.component.html',
  styleUrl: './add-worker-popup.component.scss',
})
export class AddWorkerPopupComponent {
  @ViewChild('myInputPosition') myInputPosition: ElementRef;
  /* Публичные свойства */
  formAddWorker = new FormGroup({
    fio_worker: new FormControl('', Validators.required),
    birthday_worker: new FormControl('', Validators.required),
    gender_worker: new FormControl('false'),
    departments_worker: new FormControl('', Validators.required),
    categories_worker: new FormControl('', Validators.required),
    date_hiring_worker: new FormControl(''),
    positions_worker: new FormControl('', Validators.required),
    competency_worker: new FormControl(''),
    positions_worker_card: new FormControl(''),
    photo_worker: new FormControl(''),
    note_worker: new FormControl(''),
  });

  categories!: workercategory[];
  departments!: workerdepartment[];
  gtpositions!: workergtpositions[];
  positions!: any[];
  filterPositions!: workergtpositions[];
  filteringWords!: any;
  gtpositionscolums: string;
  inputArr: inputArr;

  isModuleShowed: boolean = false;
  targetElement: any;
  profile: workerinfo;

  constructor(
    private categoryService: WorkerCategoryService,
    private departmentService: WorkerDepartmentService,
    private workergtpositionsService: WorkerGtPositionsService,
    private profileService: WorkerInfoService,
    private renderer: Renderer2,
    private router: Router,
    private activateRoute: ActivatedRoute
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
      date_hiring_worker: '',
      date_layoff_worker: '',
      note_worker: '',
      add_date_worker: '',
      photo_worker: '',
    };
  }

  ngOnInit(): void {
    this.getDepartment();
    this.getCategory();
    this.getGtPositions();
    this.subscribedformAddWorkerPositions();
    this.subscribedformAddWorkerDepartment();
  }
  subscribedformAddWorkerPositions() {
    this.formAddWorker
      .get('positions_worker')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        this.workergtpositionsService
          .filterGtPositions(value)
          .subscribe((data) => {
            this.positions = data;
          });
      });
  }

  subscribedformAddWorkerDepartment() {
    this.formAddWorker
      .get('departments_worker')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        console.log('value departament', value);
        if (value == 'ООО «ГТ Север»') {
          console.log('ООО «ГТ Север»');
          this.getGtPositions();
        }
        if (value == 'ООО «Арктик-Флот»') {
          console.log('ООО «Арктик-Флот»');
          this.getAfPositions();
        }
        if (value == 'ООО "ЭТЦ"АЛЬФА"') {
          console.log('ООО "ЭТЦ"АЛЬФА"');
          this.getEtsPositions();
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

  getGtPositions() {
    this.workergtpositionsService.getGtPositions().subscribe((data) => {
      this.gtpositions = data;
      this.positions = this.gtpositions;
    });
  }
  getAfPositions() {
    this.workergtpositionsService.getGtPositions().subscribe((data) => {
      this.gtpositions = data;
      this.positions = [
        {
          id_af_worker_positions: 1,
          name_af_worker_positions: '111',
          name2_af_worker_positions: 'А22222',
          name3_af_worker_positions: 'А22222',
        },
        {
          id_aft_worker_positions: 1,
          name_af_worker_positions: 'А22222',
          name2_af_worker_positions: 'А22222',
          name3_af_worker_positions: 'А22222',
        },
        {
          id_aft_worker_positions: 1,
          name_af_worker_positions: '3333333',
          name2_af_worker_positions: 'А22222',
          name3_af_worker_positions: 'А22222',
        },
      ];
      console.log(this.positions);
    });

    /* this.workergtpositionsService.getGtPositions().subscribe((data) => {
      this.gtpositions = data;
    });*/
  }
  getEtsPositions() {
    this.positions = [
      {
        id_af_worker_positions: 1,
        name_af_worker_positions: '55',
        name2_af_worker_positions: '55',
        name3_af_worker_positions: '55',
      },
      {
        id_aft_worker_positions: 1,
        name_af_worker_positions: '66',
        name2_af_worker_positions: '66',
        name3_af_worker_positions: '66',
      },
      {
        id_aft_worker_positions: 1,
        name_af_worker_positions: '77',
        name2_af_worker_positions: '77',
        name3_af_worker_positions: '7',
      },
    ];
    /* this.workergtpositionsService.getGtPositions().subscribe((data) => {
      this.gtpositions = data;

    });*/
  }
  /*getGtPositionsInfo() {
    console.log('11111', this.gtpositions);
    return this.gtpositions;
    this.inputArr = {
      data: {
        item: this.gtpositions,
      },
      colums: this.gtpositionscolums,
    }
  }*/

  isOpen: boolean = false;
  isChecked: boolean = false;
  isCheckedValue: boolean = false;
  inputFocusActive: boolean = false;

  addWorker() {
    if (this.formAddWorker.valid) {
      console.log(this.formAddWorker.value);
    } else {
      console.log('Ne valid');
      console.log(this.formAddWorker.value);
    }
  }
}
