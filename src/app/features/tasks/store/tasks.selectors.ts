import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task, TaskFilter, TaskState } from '../task.model';

const fetaureKey = 'tasks';

export const selectTaskState = createFeatureSelector<TaskState>(fetaureKey);

export const selectAllTasks = createSelector(selectTaskState, (state) => state.tasks);

export const selectFilter = createSelector(selectTaskState, (state) => state.filter);

// export const selectFilteredTasks = createSelector(selectTaskState, (state) =>
//   state.tasks.filter((task) => {
//     if (state.filter === 'completed') return task.completed; // true
//     if (state.filter === 'pending') return !task.completed; // false -> true
//     return true; // all
//   }),
// );

export const selectFilteredTasks = createSelector(
  selectAllTasks,
  selectFilter,
  (tasks: Task[], filter: TaskFilter) => {
    return tasks.filter((task) => {
      if (filter === 'completed') return task.completed; // true
      if (filter === 'pending') return !task.completed; // false -> true
      return true; // all
    });
  },
);
