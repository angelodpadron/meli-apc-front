import {Component, Input} from '@angular/core';
import {PieChartModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [
    PieChartModule
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  @Input() data: {name: string, value: number}[] = []
  view: [number, number] = [700, 400]

}
