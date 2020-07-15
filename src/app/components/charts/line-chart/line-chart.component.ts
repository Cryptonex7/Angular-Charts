import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  @Input() width: number | string = "100%";
  @Input() height: number | string = 400;
  @Input() lineChartData: ChartDataSets[] = [];
  @Input() lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
    },
  };
  public lineChartColors: Colors[] = [
    {
      backgroundColor: 'rgba(0, 122, 251, 0.2)',
      borderColor: 'rgba(0, 122, 251, 1)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    console.log('INcHart Deta: ', this.lineChartData)
  }
}
