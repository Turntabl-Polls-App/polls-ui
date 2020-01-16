import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  private _url: string = "https://creators-web-api.herokuapp.com/api/v1/creators/";
  private  _poll_url: string = "https://create-polls.herokuapp.com/api/v1/polls/";

  public cid = '';
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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
  }

  // getCreatorDetails(): Observable<User>{
  //   return this.http.get<User>(this._url);
  // }

  // getCreatorPoll(id: string): Observable<Poll>{
  //   return this.http.get<Poll>(this._poll_url + "user/" + id);
  // }

}
