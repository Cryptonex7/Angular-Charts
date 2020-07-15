import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private state: RootService) { }

  ngOnInit(): void {
  }
  getState = () => this.state;
}
