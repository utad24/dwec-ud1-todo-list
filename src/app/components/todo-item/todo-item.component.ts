import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Tasks } from '../../shared/models/tasks';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styles: ``
})
export class TodoItemComponent {

  @Output() delete = new EventEmitter<Tasks>();
  @Output() complete = new EventEmitter<Tasks>();

  //@Input() task?: Tasks;
  task = input.required<Tasks>();

}
