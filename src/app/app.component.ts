import { Component, OnInit } from '@angular/core';
import { APIService } from "./services/api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor(private http: APIService){}

  ngOnInit(): void {
    this.http.getData();
  }

  secret = '2020';

  encode = (secret: string) => {
    return (
      '0x' +
      secret
        .split('')
        .map((char, idx) => String.fromCharCode(char.charCodeAt(0) + idx))
        .join('')
    );
  };
  decode = (secret: string) => {
    return secret
      .substring(2)
      .split('')
      .map((char, idx) => String.fromCharCode(char.charCodeAt(0) - idx))
      .join('');
  };
}
