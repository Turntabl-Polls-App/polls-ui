import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable } from 'rxjs';
import { Poll, Options } from './model/poll';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { this.http.get(window.location.origin + '/options').subscribe(response =>{
    console.log('response oooooooooo' + response)
  })
  }

  private _url: string = "https://options-web.herokuapp.com/api/v1/addNewPoll2";
  private  _option_url: string = "https://options-web.herokuapp.com/api/v1/options";
  
  getPolls(): Observable<Poll[]>{ return this.http.get<Poll[]>(this._url); }

  getPollById(id: string): Observable<Poll>{
    return this.http.get<Poll>(this._url + id);
  }

  getOptions(): Observable<Options[]>{
    return this.http.get<Options[]>(this._option_url);
  }

  getOptionById(id: string): Observable<Poll>{
    return this.http.get<Poll>(this._option_url + id);
  }

  addOptions(option:Options): Observable<Options>{
    return this.http.post<Options>(this._option_url, option);  
  }

  addNewPoll(poll:Poll): Observable<Poll>{
    return this.http.post<Poll>(this._url, poll);
  }
}
