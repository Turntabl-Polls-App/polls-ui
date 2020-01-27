import { Component, OnInit, Renderer2, ElementRef, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from  './option';
import { Poll } from './poll';
import { User } from './user';
import {SendmailService} from './sendmail.service';
import { FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.scss']
})


export class NewPollComponent implements OnInit {

  pollModel
  questionForm = new FormGroup({
    question: new FormControl('')
  });

  optionsForm = new FormGroup({
  });

  emailForm = new FormGroup({
    email: new FormControl('')
  });


  pollid: string;


  options = [{option_id: '1', poll_id: '', content: ''}]
  finalOptions = [];

 
  


  poll = {

    question : {
      poll_id: '',
      question: 'Question here'
    },

    options:  [],

    email: "isaac.agyen@turntabl.io"

  }


  userObservable: Observable<User>

  

  public AllPolls : Array<Poll>= []


  private _url: string = "https://create-polls.herokuapp.com/api/v1/polls/";
  private  _option_url: string = "https://options-web.herokuapp.com/api/v1/options/";
  
 
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private sendmail: SendmailService, private renderer: Renderer2, private el: ElementRef, private _formBuilder: FormBuilder) {


    this.pollModel = {
      pollid: UUID.UUID(),
      name:"",
      pollItems: [],
      selectMultiple: false,
    };
  }
  
  

  ngOnInit() {

     let poll_id = this.route.snapshot.paramMap.get('poll_id');
     const length = this.options.length
     this.optionsForm.addControl(length.toString(), new FormControl(''));
  
    this.getPolls()
    .subscribe(poll => {
      // this.poll = poll;
      console.log('POLL', poll);
    });


    
    // this.arrayItems = [];

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
    return this.http.post<Option>(this._option_url, this.poll.options);
  }

  addNewPoll(poll:Poll): Observable<Poll>{
    return this.http.post<Poll>(this._url, poll);
  }

  deletePoll(id: number): Observable<Poll>{
    return this.http.delete<Poll>(this._url +  id);
  }

  addPollItem(name: string): void {
    // const id = this.afs.cre ateId();
    this.pollModel.pollItems.push({ pollid: UUID.UUID(), name: name })
  }
  remove(pollItem): void {
    const index = this.pollModel.pollItems.findIndex(x => x.pollid === pollItem.pollid);
    this.pollModel.pollItems.splice(index, 1);
  }

  newOptionbtn(){
    
    // this.addItem(item)
    const length = this.options.length + 1;
    this.optionsForm.addControl(length.toString(), new FormControl(''))
    this.options.push({option_id: length.toString(), poll_id: '', content:''});//push empty object of type options
}

generateUUID(){
  this.pollid=UUID.UUID();
  console.log(this.pollid);

  
}
save() { 
  console.log(this.pollModel);
  
}


onSubmit() {
  console.log("Printing optionsForm | ",this.optionsForm.value);
  console.log("Printing questionForm | ",this.questionForm.value);
  console.log("Printing emailForm | ",this.emailForm.value.email);


  
  // this.poll.question.question = this.questionForm.value.question;
  // this.poll.question.poll_id = UUID.UUID();

  // console.log('QUESTION', this.poll.question);

  // this.poll.options = this.optionsForm.value;

  // console.log('options form', this.optionsForm.value)
  
  // console.log('OPTIONS', this.poll.options);
  // console.log(this.poll.options);


  // console.log('DEMO', this.demoForm.value);

  // this.poll.options.map(con => {
  //   this.finalOptions.push({
  //     option_id: UUID.UUID(),
  //     poll_id: this.pollid,
  //     content: con
  //   })

  // });{

  //  }

   
  //   let option = {
  //     option_id: UUID.UUID(),
  //     poll_id: this.poll.question.pollid,
  //     content: this.options
  //   }

  //   for (let key in option) {
  //     let value = option[key];
      
    
      
  //     this.finalOptions.push(option);
  //     console.log('ID', this.optionid);
  //   }
  

  // console.log('final options',this.finalOptions);



  // this.poll.email = this.emailForm.value.email;
  // console.log('EMAIL', this.poll.email);


  // this.sendmail.sendmail(this.user).subscribe()
  // console.log(this.emailForm.value);
}

public removeOption( id: number,  option_id: string ) : void {
  this.options.splice(id, 1);
  this.optionsForm.removeControl(option_id);
}
  // const index = this.options.indexOf()
  // if (index > -1) {
  //   this.options.splice(index, 1);
  // }

  

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

  // this.appservice.addOptions(this.poll.pollItems[0]).subscribe(response => {
  //   console.log(response);
  // })
}
