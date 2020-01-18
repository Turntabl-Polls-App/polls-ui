import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


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
       
  // private _url: string = "https://creators-web-api.herokuapp.com/api/v1/creators/";
  // private  _poll_url: string = "https://create-polls.herokuapp.com/api/v1/polls/";

  // public cid = '';
  // constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   let id = this.route.snapshot.paramMap.get('id');
  //   this.cid = id;

  //   this.getCreatorDetails()
  //   .subscribe(user => {
  //     this.user = user;
  //     console.log(user);
  //   });

  //   this.getCreatorPoll(id).subscribe(poll => {
  //     this.poll = poll;
  //     console.log(this.poll);

  //   })
  // }

  // getCreatorDetails(): Observable<User>{
  //   return this.http.get<User>(this._url);
  // }

  // getCreatorPoll(id: string): Observable<Poll>{
  //   return this.http.get<Poll>(this._poll_url + "user/" + id);
  // }

}
