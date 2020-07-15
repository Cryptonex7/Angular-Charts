import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(private httpClient: HttpClient) {}
  data = new Subject<any>();
  getData() {
    this.httpClient
      .get('https://apikrm.now.sh/analyse')
      .subscribe((res) => {
        console.log(res);
        this.data.next(res);
      });
  }
}
