import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  @Input() value: number = 0;
  @Input() maxValue: number = 50;

  constructor() {}

  ngOnInit(): void {}
}
