import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  basicData1: any;
  basicData2: any;
  basicOptions1: any;
  basicOptions2: any;

  constructor() { }

  ngOnInit(): void {
    this.chart1();
    this.options1();
    this.chart2();
    this.options2();
  }
  chart1(){
    this.basicData1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Male',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5'
        },
        {
          label: 'Female',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726'
        }
      ]
    }
  }
  options1() {
    this.basicOptions1 = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }
  chart2(){
    this.basicData2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Europe',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Other',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
  options2(){
    this.basicOptions2 = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }

}
