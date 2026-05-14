import { Component } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';

@Component({
  selector: 'app-tasks-view',
  imports: [TaskList],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {}
