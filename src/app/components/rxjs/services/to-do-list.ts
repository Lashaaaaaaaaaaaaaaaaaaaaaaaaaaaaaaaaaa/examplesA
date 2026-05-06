import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../modals/to-do.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoList {
  public http = inject(HttpClient);

  getAllTodos(): Observable<ToDo> {
    return this.http.get<ToDo>('https://jsonplaceholder.typicode.com/todos/');
  }
}
