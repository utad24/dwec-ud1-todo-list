import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  KEY_NAME = 'task';

  constructor() { }

  save(task: Tasks) {
    // Obtiene las tareas actuales del localStorage
    const tareasActuales = localStorage.getItem(this.KEY_NAME);

    // Si existen tareas actuales, las parsea y agrega la nueva tarea
    let tareas = tareasActuales ? JSON.parse(tareasActuales) : []; // Inicializa un arreglo vacío si no hay tareas
    tareas.push(task);
    // Guarda las tareas actualizadas en el localStorage
    localStorage.setItem(this.KEY_NAME, JSON.stringify(tareas));
  }

  getTasks() {
    // Obtiene las tareas actuales del localStorage
    const tareasActuales = localStorage.getItem(this.KEY_NAME);
    return tareasActuales ? JSON.parse(tareasActuales) : [];
  }

  delete(task: Tasks) {
    // Obtiene las tareas actuales del localStorage
    const tareasActuales = localStorage.getItem(this.KEY_NAME);

    // Si existen tareas actuales, las parsea y agrega la nueva tarea
    let tareas = tareasActuales ? JSON.parse(tareasActuales) : []; // Inicializa un arreglo vacío si no hay tareas

    tareas = tareas.filter((item: any) => item.id !== task.id);

    // Guarda las tareas actualizadas en el localStorage
    localStorage.setItem(this.KEY_NAME, JSON.stringify(tareas));
  }
}
