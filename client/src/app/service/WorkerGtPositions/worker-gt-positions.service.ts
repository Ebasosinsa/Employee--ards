import { Injectable } from '@angular/core';
import { workergtpositions } from '../../models/workergtpositions';
import { ResponseHttp } from '../../models/responseHttp';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkerGtPositionsService {
  apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getGtPositions(): Observable<workergtpositions[]> {
    return this.http
      .get<ResponseHttp>(
        this.apiUrl + '/api/workergtpositions' /*this.confgapiUrl*/
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
