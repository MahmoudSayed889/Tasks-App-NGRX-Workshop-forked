import { createAction, props } from '@ngrx/store';
import { Task, TaskFilter } from '../task.model';

export const loadTasks = createAction('[Tasks] Load');

export const loadTasksSuccess = createAction('[Tasks] Load Success', props<{ tasks: Task[] }>());

export const loadTasksFailure = createAction('[Tasks] Load Failure', props<{ error: string }>());

// export const createTask = createAction('[Tasks] Create');

export const toggleTask = createAction(
  '[Tasks] Toggle',
  props<{ _id: string; currCompleted: boolean }>(),
);

export const toggleTasksSuccess = createAction('[Tasks] Toggle Success', props<{ task: Task }>());

export const toggleTasksFailure = createAction(
  '[Tasks] Toggle Failure',
  props<{ error: string }>(),
);

export const setFilter = createAction("[Tasks] Set Filter",props<{filter:TaskFilter}>());
