import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() width: number | string = '100%';
  @Input() height: number | string = 400;
  @Input() pieChartData: ChartDataSets[] = [];
  @Input() pieChartLabels: Label[] = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public pieChartColors: Colors[] = [
    {
      backgroundColor: 'rgba(0, 122, 251, 0.2)',
      borderColor: 'rgba(0, 122, 251, 1)',
    },
  ];
  public pieChartLegend = true;
  public pieChartType = 'pie';
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    console.log('INcHart Deta: ', this.pieChartData);
  }
}
