import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import {Poll } from  '../model/poll';


@Component({
  selector: 'app-matpollform',
  templateUrl: './matpollform.component.html',
  styleUrls: ['./matpollform.component.scss']
})



export class MatpollformComponent implements OnInit {

 
  poll: Poll


  constructor() { 
    this.poll = {
      pollid: UUID.UUID(),
      name:"",
      pollItems: [],
      selectMultiple: false,
    };

  }

  ngOnInit() {
  }

  addPollItem(name: string): void {
    // const id = this.afs.createId();
    this.poll.pollItems.push({ pollItemid: UUID.UUID(), name: name})
  }

  remove(pollItem): void {
    const index = this.poll.pollItems.findIndex(x => x.pollItemid === pollItem.id);
    this.poll.pollItems.splice(index, 1);
  }

  removePollItem(id: string): void {
    const index: number = this.poll.pollItems.findIndex(x => x.pollItemid === id);
    this.poll.pollItems.splice(index, 1);
  }

  save() { 
    console.log(this.poll);
  }

  saveActive(): boolean {
    return this.poll.name.length > 0 
      && this.poll.pollItems.length > 0 
      && this.poll.pollItems.find(x => !x.name || x.name.length === 0) === undefined;
  }

  // update(name: string) { 
  //   this.poll.name = name; 
  //   this.poll.pollItem.name = name;
  // }
}
