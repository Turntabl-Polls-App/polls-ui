import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import {Poll, Options } from  '../model/poll';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import {SendmailService} from './sendmail.service';
import {User} from '../model/poll';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-matpollform',
  templateUrl: './matpollform.component.html',
  styleUrls: ['./matpollform.component.scss']
})

  export class MatpollformComponent implements OnInit {

  creatorsForm = new FormGroup({
    email: new FormControl('')
    });

    userObservable: Observable<User>

    pollid 
    poll: Poll
  
    constructor(private appservice : AppserviceService, private sendmailService: SendmailService) { 
    this.pollid = UUID.UUID()
     
    this.poll = {
      recipient_email: '',
      poll_id: this.pollid,
      question:'',
      options: [],
      creator_email: '',
      selectMultiple: false,
    };
  }


  ngOnInit() {}

  addOption(): void {
    this.poll.options.push({ option_id: UUID.UUID(), content: name, poll_id: this.pollid})}

  remove(option): void {
    const index = this.poll.options.findIndex(x => x.option_id === option.id);
    this.poll.options.splice(index, 1);
  }

  removeOption(id: string): void {
    const index: number = this.poll.options.findIndex(x => x.option_id === id);
    this.poll.options.splice(index, 1);
  }

  send() {
    this.appservice.addNewPoll(this.poll)
    .subscribe(response => {
        console.log(response);
    });

    this.sendmailService.sendmail(this.poll).subscribe()
    // this.sendmailService.sendmail(this.creatorsForm.value).subscribe()

  }

  saveActive(): boolean {
    return this.poll.question.length > 0 
      && this.poll.options.length > 0 
      && this.poll.options.find(x => !x.content || x.content.length === 0) === undefined;
  }
}