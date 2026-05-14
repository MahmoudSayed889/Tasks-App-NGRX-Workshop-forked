import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/tasks.actions';
import { TaskRequest } from '../../task.model';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {

  private _store = inject(Store);

  form = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      console.log('Emitting new task title:', this.form.value.title);

      const dataToSend = {
        title: this.form.value.title,
        completed: false,
        user: 'Mahmoud',
      } as TaskRequest

      this._store.dispatch(TaskActions.createTask({ task: dataToSend }))
    }
  }
}
