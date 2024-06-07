import { Component } from '@angular/core';
import { WorkerProfileBtnClass } from './worker-profilebtn';
import { WorkerProfilebtnService } from '../../../../service/worker-profilebtn.service';

/* Страница профиля работника компании */
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.scss',
})
export class WorkerProfileComponent {
  worker_buttons!: WorkerProfileBtnClass[];
  constructor(private WorkerProfilebtnService: WorkerProfilebtnService) {}

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
}
