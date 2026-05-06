import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ToDoList } from '../../services/to-do-list';
import { ToDo } from '../../modals/to-do.interface';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs implements OnInit, OnDestroy {
  public allToDoList: ToDo[] | undefined;

  public todoService = inject(ToDoList);

  public hasError: boolean = false;

  public subscriptions: any[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.todoService
        .getAllTodos()
        .pipe(
          tap((data) => {
            this.allToDoList = data as unknown as ToDo[];
          }),
          catchError(() => {
            this.hasError = true;
            return of('Error');
          }),
          finalize(() => {
            console.log('Finally');
          }),
        )
        .subscribe(),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((el) => {
      el.unsubscribe();
    });
  }
}
