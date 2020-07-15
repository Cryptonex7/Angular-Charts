import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
import { APIService } from 'src/app/services/api.service';
import { ChartDataModel } from "../../models/charts/chart.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private state: RootService, private http: APIService) {}
  stud_hired_per_year_bar: ChartDataModel | any;
  stud_cgpa_line: ChartDataModel;
  stud_branch_pie: ChartDataModel;

  ngOnInit(): void {
    this.http.getData();
    this.http.data.subscribe((res) => {
      this.stud_hired_per_year_bar = {
        data: [
          {
            data: [...res.student.stud_hired_per_year_bar.y, ...res.student.stud_hired_per_year_bar.y],
            label: 'vCD-A Build',
          },
        ],
        labels: [...res.student.stud_hired_per_year_bar.x, ...res.student.stud_hired_per_year_bar.x],
        borderColor: 'rgba(0, 122, 251, 0.2)',
      };
      this.stud_cgpa_line = {
        data: [
          {
            data: [...res.student.stud_cgpa_line.y, 4.6, 9.01, 3.14, 9.88, ...res.student.stud_cgpa_line.y],
            label: 'vCD-A Build',
            lineTension: 0,
          },
        ],
        labels: [...res.student.stud_cgpa_line.x, 4, 7, 2, 13, ...res.student.stud_cgpa_line.x],
      };
      this.stud_branch_pie = {
        data: [
          {
            data: res.student.stud_branch_pie.values,
            label: 'vCD-A Build',
            lineTension: 0,
          },
        ],
        labels: res.student.stud_branch_pie.labels,
      };
    });
  }
  getState = () => this.state;
}
