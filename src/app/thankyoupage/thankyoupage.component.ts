import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ResponseService} from '../response/response.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.scss']
})
export class ThankyoupageComponent implements OnInit {

  constructor(private responseService: ResponseService, private activatedRoute : ActivatedRoute, 
    private location: Location ){}
    responses={
      option_id:'',
      poll_id: ''
    };

     ngOnInit(){
  setTimeout(() => {
    this.activatedRoute.queryParams.
    subscribe(params => {
     this.responses.option_id = params.option_id
     this.responses.poll_id = params.poll_id
     // this.responses.suggestions = params.suggestions        // this.responses = params
    
      this.responseService.recordResponse(this.responses).subscribe(response => {
       console.log(response);       
     })
   
   }) 
  }, 1000);
 

    }
}

