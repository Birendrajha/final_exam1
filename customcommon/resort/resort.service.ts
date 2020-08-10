import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './param';
import { IResponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})
export class ResortService {



  constructor(private http:HttpClient) { }
  apiEndPoint = 'http://localhost:3005';
  find(input: data){
    return this.http.post<IResponse>(this.apiEndPoint + '/restaurants/find', input);
  }
}
