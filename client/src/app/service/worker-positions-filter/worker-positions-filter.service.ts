import { Injectable } from '@angular/core';
import { ResponseHttp } from '../../models/responseHttp';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkerPositionsFilterService {
  apiUrl = 'http://127.0.0.1:8000';
  apiUrlAdd = '/api/gt-workerpositions-filter';
  inputValue: string;

  constructor(private http: HttpClient) {}

  filterPositions(
    inputValue: any,
    departament: number,
    colum: string
  ): Observable<any[]> {
    console.log('inputvalue', inputValue);
    console.log('departament', departament);

    console.log('colum', colum);
    if (departament == 1) {
      this.apiUrlAdd = '/api/gt-workerpositions-filter';
    }
    if (departament == 2) {
      this.apiUrlAdd = '/api/af-workerpositions-filter';
    }
    if (departament == 3) {
      this.apiUrlAdd = '/api/etc-workerpositions-filter';
    }
    console.log('apiUrl', this.apiUrlAdd);
    return this.http
      .get<ResponseHttp>(this.apiUrl + this.apiUrlAdd /*this.confgapiUrl*/, {
        params: { filter: inputValue, departament: departament, colum: colum },
      })
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

  getPositions(departament: number): Observable<any[]> {
    console.log('departament', departament);

    if (departament == 1) {
      this.apiUrlAdd = '/api/gt-workerpositions-filter';
    }
    if (departament == 2) {
      this.apiUrlAdd = '/api/af-workerpositions-filter';
    }
    if (departament == 3) {
      this.apiUrlAdd = '/api/etc-workerpositions-filter';
    }
    console.log('apiUrl', this.apiUrlAdd);
    return this.http
      .get<ResponseHttp>(this.apiUrl + this.apiUrlAdd /*this.confgapiUrl*/)
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
