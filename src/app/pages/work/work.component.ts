import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private state: RootService) { }
  ngOnInit(): void {
  }
  getState = () => this.state;
}
