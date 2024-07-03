import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { workercategory } from '../../models/workercategory';
import { ResponseHttp } from '../../models/responseHttp';

@Injectable({
  providedIn: 'root',
})
export class WorkerCategoryService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://127.0.0.1:8000';

  getCategory(): Observable<workercategory[]> {
    return this.http
      .get<ResponseHttp>(
        this.apiUrl + '/api/workercategory' /*this.confgapiUrl*/
      )
      .pipe(
        map((data) => {
          console.log('return11111111111', data.data.items);
          return data.data.items as any;
        }),
        catchError((error: any) => {
          return throwError(() => new Error(error));
        })
      );
  }
}
