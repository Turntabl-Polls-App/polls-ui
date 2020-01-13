import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent {

  dataSource: Object;
  constructor() {
    //STEP 2 - Chart Data
    const chartData = [{
      label: "YES",
      value: "60%"
    }, {
      label: "NO",
      value: "20%"
    }, {
      label: "SOMETIMES",
      value: "10%"
    }, {
      label: "RARELY",
      value: "10%"
    }];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        caption: "Whether Turntablers like to rest on Weekends",
        subCaption: "Options= In Percentages",
        xAxisName: "Choices",
        yAxisName: "Response Level(%)",
        numberSuffix: "%",
        theme: "fusion"
      },
      // Chart Data - from step 2
      "data": chartData
    };
    this.dataSource = dataSource
  }
       
  

}
