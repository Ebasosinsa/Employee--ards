import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

import { workercategory } from '../../models/workercategory';
import { ResponseHttp } from '../../models/responseHttp';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class WorkerCategoryService {
  getCategory(): Observable<workercategory[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/category').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) = {
        return  throwError(error)
      })
    );
  }

  constructor(private http: HttpClient) {}
}
