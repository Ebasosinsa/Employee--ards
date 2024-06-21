import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputChangeColorDirective } from '../../../../directive/inputChangeColor/input-change-color.directive';

@Component({
  selector: 'app-add-worker-popup',
  templateUrl: './add-worker-popup.component.html',
  styleUrl: './add-worker-popup.component.scss',
})
export class AddWorkerPopupComponent {
  isOpen: boolean = false;
  isChecked: boolean = false;
  isCheckedValue: number = 0;
  inputFocusActive: boolean = false;

  formAddWorker = new FormGroup({
    fio_worker: new FormControl('', Validators.required),
    birthday_worker: new FormControl('', Validators.required),
    gender_worker: new FormControl(''),
    departments_worker: new FormControl('', Validators.required),
    categories_worker: new FormControl('', Validators.required),
    date_hiring_worker: new FormControl(''),
    positions_worker: new FormControl('', Validators.required),
    competency_worker: new FormControl(''),
    positions_worker_card: new FormControl(''),
    photo_worker: new FormControl(''),
    note_worker: new FormControl(''),
  });
  ev: any;
  eve: any;

  /*inputFocus(event: any): void {
    console.log(event.target);
    event.target.focus((this.inputFocusActive = true));
  }*/

  ToggleAddWorker() {
    this.isOpen
      ? ((this.isCheckedValue = 0),
        (this.isChecked = false),
        this.formAddWorker.get('gender_worker')?.setValue('false'))
      : ((this.isCheckedValue = 1),
        (this.isChecked = true),
        this.formAddWorker.get('gender_worker')?.setValue('true'));
    console.log(this.formAddWorker.get(['gender_worker'])?.value);
    this.isOpen = !this.isOpen;
  }
  /*(focus)="formColorFocus($event.target)" (blur)="formColorBlurs($event.target)"
  formColorFocus(element: any): void {
    console.log('focus', element);
    this.inputFocusActive = true;
  }
  formColorBlurs(eve: any = this.eve): void {
    console.log('blurs', this.eve);
    this.inputFocusActive = false;
  }*/
  public addWorker() {
    if (this.formAddWorker.valid) {
      console.log(this.formAddWorker.value);
    } else {
      console.log('Ne valid');
      console.log(this.formAddWorker.get(['gender_worker'])?.value);
      this.formAddWorker.get('gender_worker')?.setValue('true');
    }
  }
}
