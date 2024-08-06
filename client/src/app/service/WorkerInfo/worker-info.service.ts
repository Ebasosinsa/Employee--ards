import { Injectable } from '@angular/core';
import { workerinfo } from '../../models/workerinfo';
import { Observable, map, catchError, throwError } from 'rxjs';
import { ResponseHttp } from '../../models/responseHttp';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkerInfoService {
  //https://jsonplaceholder.typicode.com/posts
  apiUrl = 'http://127.0.0.1:8000';
  apiUrlAdd = '/api/workerinfo'; //
  hyi: any;
  constructor(private http: HttpClient) {}
  /*addProfile(profile: workerinfo) {
    return this.http.post(this.apiUrl + this.apiUrlAdd, profile);
  }*/
  /*addProfile(profile: workerinfo) {
    console.log('proveil', profile);
    this.http.post(this.apiUrl + this.apiUrlAdd, profile);
    console.log('ok');*/
  /*addProfile(profile: workerinfo): Observable<workerinfo> {
    console.log('proveil', profile);
    return this.http.post(this.apiUrl + this.apiUrlAdd, profile).pipe(
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
  getProfile(): Observable<workerinfo> {
    return this.http
      .get<workerinfo>(this.apiUrl + this.apiUrlAdd, httpOptions)
      .pipe();
  }
  /** POST: add a new hero to the database */
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
  updateProfile(profile: workerinfo): Observable<workerinfo> {
    return this.http
      .put<ResponseHttp>(
        this.apiUrl + '/api/workerinfo/' + profile.id_worker,
        profile
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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};
