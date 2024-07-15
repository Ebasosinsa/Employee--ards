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
  inputValue: string;
  filteredArray: workergtpositions[];

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

  filterGtPositions(inputValue: any): Observable<any[]> {
    console.log('inputvalue', inputValue);
    this.inputValue = inputValue;
    return this.http
      .get<ResponseHttp>(
        this.apiUrl + '/api/workergtpositions-filter' /*this.confgapiUrl*/,
        {
          params: { filter: inputValue },
        }
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
