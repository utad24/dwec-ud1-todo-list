import { Component, inject, OnInit } from '@angular/core';
import { TodoFormComponent } from "../../components/todo-form/todo-form.component";
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";
import { Tasks } from '../../shared/models/tasks';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  data: Tasks[] = [];
  private taskService = inject(TaskService);

  constructor() {

  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.data = this.taskService.getTasks();
  }

  delete(task: Tasks) {
    //this.data = this.data.filter(item => item.id !== task.id);
    this.taskService.delete(task);
    this.loadData();
  }

  complete(task: Tasks) {
    this.data = this.data.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item);
  }


}
