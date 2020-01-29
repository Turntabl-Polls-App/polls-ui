import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }
  private responseLink = 'https://options-web.herokuapp.com/api/v1/responses';
  // private responseLink ='http://localhost:8080/api/v1/responses'

  recordResponse(result): Observable<Response>{
    return this.http.post<Response>(this.responseLink, result);
  }
}
