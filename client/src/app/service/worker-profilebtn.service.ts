import { Injectable } from '@angular/core';
import { WorkerProfileBtnClass } from '../components/pages/workers/worker-profile/worker-profilebtn';
import { mockWorkerProfileBtn } from '../components/pages/workers/worker-profile/mockworler-profilebtn';
import { Observable, of } from 'rxjs';
/* Сервис для представления данных о кнопках в профиле сотрудника */
@Injectable({
  providedIn: 'root',
})
export class WorkerProfilebtnService {
  getWorkerProfilebtn(): Observable<WorkerProfileBtnClass[]> {
    return of(mockWorkerProfileBtn);
  }
}
