import { Component } from '@angular/core';
import { TodoFormComponent } from "../../components/todo-form/todo-form.component";
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";
import { Tasks } from '../../shared/models/tasks';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  data: Tasks[] = [
    { id: 1, title: 'Tarea 1', completed: false, createdAt: new Date() },
    { id: 2, title: 'Tarea 2', completed: true, createdAt: new Date() }
  ];


  delete(task: Tasks) {
    this.data = this.data.filter(item => item.id !== task.id);
  }

  complete(task: Tasks) {
    this.data = this.data.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item);
  }
}
