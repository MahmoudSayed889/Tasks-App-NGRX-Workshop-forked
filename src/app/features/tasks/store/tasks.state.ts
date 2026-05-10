import { TaskState } from '../task.model';

export const TaskInitialState: TaskState = {
  tasks: [],
  isLoading: false,
  error: null,
  filter: 'all',
};
