import { Injectable } from '@angular/core';
import { workerinfo } from '../../models/workerinfo';
import { Observable, map, catchError, throwError } from 'rxjs';
import { ResponseHttp } from '../../models/responseHttp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ALL } from 'node:dns';

@Injectable({
  providedIn: 'root',
})
export class WorkerInfoService {
  //https://jsonplaceholder.typicode.com/posts
  apiUrl = 'http://127.0.0.1:8000/';
  apiWorkerinfo = 'api/workerinfo/'; //

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
  getAllProfile(): Observable<workerinfo> {
    return this.http
      .get<workerinfo>(this.apiUrl + this.apiWorkerinfo, httpOptions)
      .pipe();
  }
  getProfile(profile_id: number): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + this.apiWorkerinfo + profile_id, httpOptions)
      .pipe();
  }
  /** POST: add a new hero to the database */
  addProfile(profile: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl + this.apiWorkerinfo, profile, httpOptions)
      .pipe();
  }

  updateProfile(id: number, updateprofile: any): Observable<any> {
    console.log('updateprofile:', updateprofile);
    return this.http
      .put<any>(
        this.apiUrl + `${this.apiWorkerinfo}${id}`,
        JSON.stringify(updateprofile),
        httpOptions
      )
      .pipe();
  }
  deleteProfile(id: number): Observable<workerinfo> {
    return this.http
      .delete<any>(this.apiUrl + `${this.apiWorkerinfo}${id}`, httpOptions)
      .pipe();
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
  }),
};
