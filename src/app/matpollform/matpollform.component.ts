import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import {Poll, Options } from  '../model/poll';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-matpollform',
  templateUrl: './matpollform.component.html',
  styleUrls: ['./matpollform.component.scss']
})



export class MatpollformComponent implements OnInit {


  pollid 
  

  poll: Poll
  addNewPoll

  constructor(private appservice : AppserviceService) { 
    this.pollid = UUID.UUID()

     
    this.poll = {
      creator_id: '101',
      poll_id: this.pollid,
      question:'',
      options: [],
      selectMultiple: false,
    };


  }

  ngOnInit() {
  }

  addOption(name: string): void {
    this.poll.options.push({ option_id: UUID.UUID(), content: name, poll_id: this.pollid})
  }

  remove(option): void {
    const index = this.poll.options.findIndex(x => x.option_id === option.id);
    this.poll.options.splice(index, 1);
  }

  removeOption(id: string): void {
    const index: number = this.poll.options.findIndex(x => x.option_id === id);
    this.poll.options.splice(index, 1);
  }

  save() { 

    this.appservice.addNewPoll(this.poll)
        .subscribe(response => {
            console.log(response);
        });


    this.poll.options.forEach(e => {
      this.appservice.addOptions(e).subscribe(response => {
        console.log(response);
        
      })
    })
    console.log(this.poll);
  }


  email() {

  }
  saveActive(): boolean {
    return this.poll.question.length > 0 
      && this.poll.options.length > 0 
      && this.poll.options.find(x => !x.content || x.content.length === 0) === undefined;
  }
}
