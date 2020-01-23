import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { Poll } from '../new-poll/poll';


@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  public user = {
    creator_id: '',
    creator_email: '',
    creator_name: ''
    
  };

  private poll = {
    poll_id: '',
    creator_id: '',
    questions: ''
  }


  private _url: string = "https://creators-web-api.herokuapp.com/api/v1/creators/";
  private  _poll_url: string = "https://create-polls.herokuapp.com/api/v1/polls/";

  public cid = '';
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.cid = id;

    this.getCreatorDetails()
    .subscribe(user => {
      // this.user = user;
      console.log(user);
    });

    this.getCreatorPoll(id).subscribe(poll => {
      // this.poll = poll;
      console.log(this.poll);

    })
  }

  getCreatorDetails(): Observable<User>{
    return this.http.get<User>(this._url);
  }

  getCreatorPoll(id: string): Observable<Poll>{
    return this.http.get<Poll>(this._poll_url + "user/" + id);
  }

  //  addCreatorPoll (cid: string, question: string){
  //    this.pollObject(cid, question);
  //    this.ngOnInit();
  //  }


  //  pollObject(cid: string, question: string){
  //    this.poll.questions = question;
  //    this.poll.c
  //  }
   }
