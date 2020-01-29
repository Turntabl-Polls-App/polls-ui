import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ResponseService} from './response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  constructor(private responseService: ResponseService, private activatedRoute : ActivatedRoute){}

    responses={
      options_id:'',
      poll_id: '',
      response_id: ''
    };

  ngOnInit() {
    setTimeout(() => {
      this.activatedRoute.queryParams.
      subscribe(params => {
       //  this.responses = params
       // const poll_id = params['id'];
       // const options_id =params['options_id'];
       // console.log(poll_id);
       // console.log(options_id);
       this.responses.options_id = params.options_id
       this.responses.poll_id = params.poll_id
       this.responses.response_id= params.response_id
       // this.responses.suggestions = params.suggestions        // this.responses = params
      
        this.responseService.recordResponse(this.responses).subscribe(response => {
         console.log(response);       
       })
     
     }) 
    }, 1000);
  }

}
