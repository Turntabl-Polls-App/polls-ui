import { Component, OnInit, Renderer2, ElementRef, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from  './option';
import { Poll } from './poll';
import { User } from './user';
import {SendmailService} from './sendmail.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  creatorsForm = new FormGroup({
    email: new FormControl(''),
    questions: new FormControl(''),
    options: new FormControl('')
  });

  user = {
    email: "isaac.agyen@turntabl.io"
  }
  userObservable: Observable<User>


  public poll = {
    poll_id: 0,
    creator_id: 2,
    questions: 'Do you prefer pizza?'
  };
   
  private option = {
    options_id: 109,
    poll_id: 201,
    content: 'not sure'
  }

  public options = [{id: 1,  title:"yes"}];

  public AllPolls : Array<Poll>= []

  private _url: string = "https://create-polls.herokuapp.com/api/v1/polls/";
  private  _option_url: string = "https://options-web.herokuapp.com/api/v1/options/";
  private lastPollId;
 
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private sendmail: SendmailService, private renderer: Renderer2, private el: ElementRef) { }
  


  ngOnInit() {
     let poll_id = this.route.snapshot.paramMap.get('poll_id');
     const length = this.options.length
    this.creatorsForm.addControl(length.toString(), new FormControl(''))
  
    this.getPolls()
    .subscribe(poll => {
      // this.poll = poll;
      console.log('POLL', poll);
    });

    
    // this.getOptions()
    // .subscribe(option => {
    // this.option = option;
    // console.log('OPTION', option);
    // });


    // this.addOptions()
    // .subscribe(options => {
    //   this.options = options;
    //   console.log('OPTIONS', options);
    // });

  
    // this.deletePoll(1)
    // .subscribe(poll => {
    //   this.poll = poll;
    //   console.log('POLL', poll);
      
    // });

    // this.addNewPoll()
    // .subscribe(poll => {
    //   this.poll = poll;
    //   console.log('POLL', poll);
    
    // });

  
  }

  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>(this._url);
  }

  getPollById(id: string): Observable<Poll>{
    return this.http.get<Poll>(this._url + id);
  }

  getOptions(): Observable<Option>{
    return this.http.get<Option>(this._option_url);
  }

  getOptionById(id: string): Observable<Poll>{
    return this.http.get<Poll>(this._option_url + id);
  }

  addOptions(): Observable<Option>{
    return this.http.post<Option>(this._option_url, this.option);
  }

  addNewPoll(poll:Poll): Observable<Poll>{
    return this.http.post<Poll>(this._url, poll);
  }

  deletePoll(id: number): Observable<Poll>{
    return this.http.delete<Poll>(this._url +  id);
  }


  newOptionbtn(){
    const length = this.options.length + 1
    this.creatorsForm.addControl(length.toString(), new FormControl(''))
    this.options.push({id: length, title:"no"});//push empty object of type options
}


onSubmit() {
    
  this.user.email = this.creatorsForm.value.email;
  console.log(this.user);

  this.sendmail.sendmail(this.user).subscribe()

  console.log(this.creatorsForm.value);
  
}

public removeOption( index: number ) : void {

  this.options.splice( index, 1 );

}

// showoptions(){
//  let userQuestion={
//   poll_id: 0,
//   creator_id: 1,
//   questions: this.creatorsForm.value.questions
//   }
  //  this.addNewPoll(userQuestion)
  //   .subscribe(poll => {
  //     this.poll = poll;
  //     console.log('POLL', poll);
    
  //   });

  //   this.getPolls()
  //   .subscribe(poll => {
  //     this.AllPolls = poll;
  //     console.log('POLL', poll);
  //     this.lastPollId = this.AllPolls[this.AllPolls.length -1].poll_id
  //   });
  
  // }


}
