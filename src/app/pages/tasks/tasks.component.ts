import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private state: RootService) {}
  ngOnInit(): void {}
  getState = () => this.state;
}
