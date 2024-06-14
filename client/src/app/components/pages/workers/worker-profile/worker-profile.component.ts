import { Component } from '@angular/core';
import { WorkerProfileBtnClass } from './worker-profilebtn';
import { WorkerProfilebtnService } from '../../../../service/worker-profilebtn.service';
import { PopupService } from '../../../../service/PopUp/popup.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

/* Страница профиля работника компании */
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          visibility: 'visible',
          transition: 'right 0.4s',
          right: '0px',
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          transition: 'right 0.4s',
          right: '-424px',
        })
      ),
      transition('open => closed', [animate('.5s')]),
      transition('closed => open', [animate('.5s')]),
    ]),
  ],
})
export class WorkerProfileComponent {
  conditionPopUpAddWorker: boolean = false;
  openPopUpAddWorker() {
    console.log('click');
    this.conditionPopUpAddWorker = !this.conditionPopUpAddWorker;
    console.log(this.conditionPopUpAddWorker);
  }

  worker_buttons!: WorkerProfileBtnClass[];

  constructor(
    private WorkerProfilebtnService: WorkerProfilebtnService,
    private popupService: PopupService
  ) {}

  getWorkerProfilebtn(): void {
    this.WorkerProfilebtnService.getWorkerProfilebtn().subscribe(
      (worker_buttons) => (this.worker_buttons = worker_buttons)
    );
  }

  ngOnInit() {
    this.getWorkerProfilebtn();
  }

  condition: boolean = false;

  selectedButton!: WorkerProfileBtnClass;
  WorkerProfileBtnSelect(button: WorkerProfileBtnClass) {
    this.selectedButton = button;
    console.log(this.selectedButton);
    console.log(this.worker_buttons);
    this.condition = !this.condition;
  }

  conditionFilterBtn: boolean = false;
  WorkerProfileFilterBtn() {
    /*  console.log('click');*/
    this.conditionFilterBtn = !this.conditionFilterBtn;
  }

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
    this.popupService.openModal();
    console.log('click');
  }

  closeModal() {
    this.isModalOpen = false;
    this.popupService.closeModal();
  }
}
