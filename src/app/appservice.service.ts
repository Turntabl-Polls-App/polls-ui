import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll, Options } from './model/poll';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) {
    this.http.get<any>(window.location.origin+'/options_url').subscribe(res=> {
      sessionStorage.setItem('options_url', res.options_url)
      sessionStorage.setItem('polls_url', res.polls_url)
    })
  }

  getPolls(): Observable<Poll[]>{ return this.http.get<Poll[]>(sessionStorage.getItem('polls_url')); }

  getPollById(id: string): Observable<Poll>{
    return this.http.get<Poll>(sessionStorage.getItem('polls_url') + id);
  }

  getOptions(): Observable<Options[]>{
    return this.http.get<Options[]>(sessionStorage.getItem('options_url'));
  }

  getOptionById(id: string): Observable<Poll>{
    return this.http.get<Poll>(sessionStorage.getItem('options_url') + id);
  }

  addOptions(option:Options): Observable<Options>{
    return this.http.post<Options>(sessionStorage.getItem('options_url'), option);  
  }

  addNewPoll(poll:Poll): Observable<Poll>{
    return this.http.post<Poll>(sessionStorage.getItem('polls_url'), poll);
  }
}
