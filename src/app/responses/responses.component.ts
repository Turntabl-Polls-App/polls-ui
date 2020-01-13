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
      label: "Venezuela",
      value: "290"
    }, {
      label: "Saudi",
      value: "260"
    }, {
      label: "Canada",
      value: "180"
    }, {
      label: "Iran",
      value: "140"
    }, {
      label: "Russia",
      value: "115"
    }, {
      label: "UAE",
      value: "100"
    }, {
      label: "US",
      value: "30"
    }, {
      label: "China",
      value: "30"
    }];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      // Chart Data - from step 2
      "data": chartData
    };
    this.dataSource = dataSource
  }
       
  

}
