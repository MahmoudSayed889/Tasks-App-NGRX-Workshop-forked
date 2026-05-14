import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../task.model';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/tasks.actions';

@Component({
  selector: 'app-task-card',
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {

  private _store = inject(Store);

  task = input<Task>({} as Task);
  onToggle = output<{ _id: string; completed: boolean }>();

  toggle() {
    // send as it is ( send current object)
    this.onToggle.emit({ _id: this.task()._id!, completed: this.task().completed! });
  }

  deleteTask() {    
    this._store.dispatch(TaskActions.deleteTask({ _id: this.task()._id! }))
  }
}
