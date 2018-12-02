import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  public API = '//localhost:8080/api/v1/jobs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: string) {
    return this.http.get(this.API + '/' + id);
  }

  save(job: any, id , isEdit: Boolean): Observable<any> {
    let result: Observable<Object>;
    if (isEdit) {
      console.log(job)
      result = this.http.put(this.API + '/' + id , job);
    } else {
      result = this.http.post(this.API, job);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(this.API + '/' + id);
  }

  search(searchKey: string): Observable<any> {
    return this.http.get(this.API + '/search/' + searchKey);
  }



}
