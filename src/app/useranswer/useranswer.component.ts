import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from  '../new-poll/option';
import { Poll } from '../new-poll/poll';


@Component({
  selector: 'app-useranswer',
  templateUrl: './useranswer.component.html',
  styleUrls: ['./useranswer.component.css']
})
export class UseranswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
}
