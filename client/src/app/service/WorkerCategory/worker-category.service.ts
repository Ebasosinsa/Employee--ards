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

  getCategory(): Observable<workercategory[]> {
    return this.http
      .get<ResponseHttp>((environment as any).apiUrl + 'api/workercategory')
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
