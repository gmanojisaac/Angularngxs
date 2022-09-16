import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from '../state/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-ngxs',
  template: `
    <app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>
  `,
})
export class ngxsCheckComponent{
  error$: Observable<boolean>;
  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}

@Component({
  selector: 'app-pure-inbox-screen',
  template: `
    <div *ngIf="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad"></span>
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>

    <div *ngIf="!error" class="page lists-show">
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <app-task-list></app-task-list>
    </div>
  `,
})
export class PureInboxScreenComponent {
  @Input() error: any;
}


@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>    
  `,
})
export class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: any) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: any) {
    this.store.dispatch(new PinTask(id));
  }
}

@Component({
  selector: 'app-pure-task-list',
  template: `
    <div class="list-items">
      <app-task
        *ngFor="let task of tasksInOrder"
        [task]="task"
        (onArchiveTask)="onArchiveTask.emit($event)"
        (onPinTask)="onPinTask.emit($event)"
      >
      </app-task>
      <div
        *ngIf="tasksInOrder.length === 0 && !loading"
        class="wrapper-message"
      >
        <span class="icon-check"></span>
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
      <div *ngIf="loading">
        <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">
          <span class="glow-checkbox"></span>
          <span class="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class PureTaskListComponent {
  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  tasksInOrder: Task[] = [];

  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}

@Component({
  selector: 'app-task',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.scss']
})
export class TaskComponent implements OnInit {

   ngOnInit(): void {
   }
   @Input() 
   task!: Task;

   // tslint:disable-next-line: no-output-on-prefix
   @Output()
   onPinTask = new EventEmitter<Event>();
 
   // tslint:disable-next-line: no-output-on-prefix
   @Output()
   onArchiveTask = new EventEmitter<Event>();
 
   /**
    * Component method to trigger the onPin event
    * @param id string
    */
   onPin(id: any) {
     this.onPinTask.emit(id);
   }
   /**
    * Component method to trigger the onArchive event
    * @param id string
    */
   onArchive(id: any) {
     this.onArchiveTask.emit(id);
   }
}

