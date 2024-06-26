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
  confgapiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getDepartment(): Observable<workerdepartment[]> {
    return this.http
      .get<ResponseHttp>(
        this.confgapiUrl + '/api/workerdepartment' /*this.confgapiUrl*/
      )
      .pipe(
        map((data) => {
          console.log('return', data);
          return data as any;
        }),
        catchError((error: any) => {
          return throwError(() => new Error(error));
        })
      );
  }
}
