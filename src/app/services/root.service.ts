import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  private state: string = 'This is Home';
  constructor() {}

  onChange = (state: string) => {
    this.state = state;
  };

  getState = () => this.state;
}
