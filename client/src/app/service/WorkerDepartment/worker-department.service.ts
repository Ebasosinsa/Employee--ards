import { Injectable } from '@angular/core';
import { workerdepartment } from '../../models/workerdepartment';
import { ResponseHttp } from '../../models/responseHttp';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkerDepartmentService {
  constructor(private http: HttpClient) {}

  getDepartment(): Observable<workerdepartment[]> {
    return this.http
      .get<ResponseHttp>((environment as any).apiUrl + 'api/department')
      .pipe(
        map((data) => {
          return data.data.items;
        }),
        catchError((error: any) => {
          return throwError(() => new Error(error));
        })
      );
  }
}
