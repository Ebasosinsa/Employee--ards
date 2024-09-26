import { Component } from '@angular/core';
import { WorkerProfileBtnClass } from './worker-profilebtn';
import { WorkerProfilebtnService } from '../../../../service/worker-profilebtn.service';

import { WorkerInfoService } from '../../../../service/WorkerInfo/worker-info.service';
import { ActivatedRoute } from '@angular/router';
import { ConvertedDataProfileService } from '../../../../service/Converted/converted-departament/converted-dataprofile.service';
import { WorkerDepartmentService } from '../../../../service/WorkerDepartment/worker-department.service';
import { workerdepartment } from '../../../../models/workerdepartment';
import { WorkerGtPositionsService } from '../../../../service/WorkerGtPositions/worker-gt-positions.service';
import { WorkerPositionsFilterService } from '../../../../service/worker-positions-filter/worker-positions-filter.service';
import { workercategory } from '../../../../models/workercategory';
import { WorkerCategoryService } from '../../../../service/WorkerCategory/worker-category.service';
import { GetPopupDataService } from '../../../../service/PopUp/GetPopupData/get-popup-data.service';
import { PopupService } from '../../../../service/PopUp/popup.service';

/* Страница профиля работника компании */
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.scss',
})
export class WorkerProfileComponent {
  conditionPopUpAddWorker: boolean = false;
  currentTemplate: string | null = null;

  alldepartments: workerdepartment[];
  allpositions: any[];
  allcategories: workercategory[];
  converteddepartment: string;
  convertedpositions: string;
  convertedcategory: string;
  converteddatestring: string;
  birthDateString: string;
  worker_buttons!: WorkerProfileBtnClass[];
  profile_id: number;
  workerProfile?: any;
  constructor(
    private WorkerProfilebtnService: WorkerProfilebtnService,
    private getpopupdata: GetPopupDataService,
    private workerinfoService: WorkerInfoService,
    private departmentService: WorkerDepartmentService,
    private positionsfilterService: WorkerPositionsFilterService,
    private categoryService: WorkerCategoryService,
    private convertDataProfileService: ConvertedDataProfileService,
    private activateRoute: ActivatedRoute,
    private popupService: PopupService
  ) {
    this.profile_id = this.activateRoute.snapshot.params['id'];
  }

  getWorkerProfilebtn(): void {
    this.WorkerProfilebtnService.getWorkerProfilebtn().subscribe(
      (worker_buttons) => (this.worker_buttons = worker_buttons)
    );
  }
  getProfile() {
    if (this.profile_id) {
      this.workerinfoService.getProfile(this.profile_id).subscribe({
        next: (data) => {
          this.workerProfile = data;
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
  }

  ngOnInit() {
    this.getProfile();
    this.getWorkerProfilebtn();
  }
  performAdditionalActions() {
    this.getDepartment();
    this.getPositions();
    this.getCategory();
  }
  getDepartment() {
    this.departmentService.getDepartment().subscribe((data) => {
      this.alldepartments = data;
    });
  }
  getPositions() {
    this.positionsfilterService
      .getPositions(this.workerProfile.departments_worker)
      .subscribe((data: any) => {
        this.allpositions = data;
      });
  }
  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.allcategories = data;
      console.log(this.allcategories);
    });
  }

  condition: boolean = false;

  selectedButton!: WorkerProfileBtnClass;
  WorkerProfileBtnSelect(button: WorkerProfileBtnClass) {
    this.selectedButton = button;
    console.log(this.selectedButton);
    console.log(this.worker_buttons);
    this.condition = !this.condition;
  }

  convertedDepartment(departments: number): string {
    if (this.alldepartments && departments) {
      this.converteddepartment =
        this.convertDataProfileService.convertedOutPutString(
          departments,
          this.alldepartments
        );
    }

    return this.converteddepartment;
  }
  convertedPositions(positions: number): string {
    if (this.allpositions && positions) {
      this.convertedpositions =
        this.convertDataProfileService.convertedOutPutString(
          positions,
          this.allpositions
        );
    }
    return this.convertedpositions;
  }
  convertedCategory(category: number): string {
    if (this.allcategories && category) {
      this.convertedcategory =
        this.convertDataProfileService.convertedOutPutString(
          category,
          this.allcategories
        );
    }
    return this.convertedcategory;
  }
  convertedDate(datestring: string): string {
    if (datestring) {
      this.converteddatestring =
        this.convertDataProfileService.convertedOutPutDate(datestring);
    }
    return this.converteddatestring;
  }
  getAgeWithText(birthDateString: string): string {
    if (birthDateString) {
      this.birthDateString =
        this.convertDataProfileService.getAgeWithText(birthDateString);
    }
    return this.birthDateString;
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

  getPopupTitle(currentName: any) {
    return this.getpopupdata.getPopupTitle(currentName);
  }
}
