import { TaskService } from './../service/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Initialising variables
  p: number = 1;
  tasks: any;

  constructor(
    private taskService: TaskService
  ) {
    this.getTasks();
  }

  // Get commentary/task
  getTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data.json();
    });
  }

}
