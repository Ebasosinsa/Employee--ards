import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { workerinfo } from '../../models/workerinfo';
import { ResponseHttp } from '../../models/responseHttp';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  apiUrl = 'http://127.0.0.1:8000';
  apiUrlAdd = '/api/workerinfo'; //
  hyi: any;
  constructor(private http: HttpClient) {}

  addProfile(profile: workerinfo): Observable<workerinfo> {
    return this.http
      .post<workerinfo>(this.apiUrl + this.apiUrlAdd, profile, httpOptions)
      .pipe();
  }
  /*addProfile(profile: workerinfo): Observable<workerinfo> {
    console.log('proveil', profile);
    return this.http
      .post<ResponseHttp>(this.apiUrl + this.apiUrlAdd, profile)
      .pipe(
        map((data) => {
          console.log('proveil', profile);
          console.log('return11111111111', data);
          return data as any;
        }),
        catchError((error: any) => {
          return throwError(() => new Error(error));
        })
      );
  }*/
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};
