import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = 'task.json';  // URL to web api

  constructor(
    private http: Http
  ) { }

  getTasks() {
    return this.http.get(this.taskUrl);
  }
}
