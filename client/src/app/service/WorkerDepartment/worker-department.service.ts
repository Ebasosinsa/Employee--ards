import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkerDepartmentService {
  getDepartment() {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
