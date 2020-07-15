import { Component, OnInit } from '@angular/core';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private state: RootService) { }
  
  ngOnInit(): void {
  }
  
  getState = () => this.state;
}
