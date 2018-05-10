import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string = "http://localhost:3000/";  // URL to web api

  constructor(
    private http: Http
  ) { }

  getTasks() {
    return this.http.get(this.baseUrl + 'tasks');
  }
}
