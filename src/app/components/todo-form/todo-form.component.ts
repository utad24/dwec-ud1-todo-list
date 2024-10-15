import { Component, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tasks } from '../../shared/models/tasks';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styles: ``
})
export class TodoFormComponent {

  reloadData = output<void>();

  mForm: FormGroup

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.mForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.mForm.value);
    const task: Tasks = {
      id: crypto.randomUUID(),
      title: this.mForm.value.title,
      completed: false,
      createdAt: new Date()
    };

    this.taskService.save(task);
    this.reloadData.emit();
  }

}
