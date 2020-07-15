import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors, Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() width: number | string = '100%';
  @Input() height: number | string = 400;
  @Input() barChartData: ChartDataSets[] = [];
  @Input() barChartLabels: Label[] = [];
  @Input() barChartType: string = 'bar';
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  public barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 122, 251, 0.2)',
      borderColor: 'rgba(0, 122, 251, 1)',
      borderWidth: 1,
    },
  ];
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    console.log('INcHart Deta: ', this.barChartData);
  }
}
