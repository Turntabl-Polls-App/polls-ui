
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  constructor(private http: HttpClient) {this.http.get<any>(window.location.origin+'/options_url').subscribe(res=> {
    sessionStorage.setItem('response_url', res.response_url)
    }) 
  }

  recordResponse(result): Observable<Response>{
    return this.http.post<Response>( sessionStorage.getItem('response_url'), result);
  }
}