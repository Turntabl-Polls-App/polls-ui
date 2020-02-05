import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/poll'

@Injectable({
	providedIn: 'root'
})
export class SendmailService {
	constructor(private http: HttpClient) { 
		this.http.get<any>(window.location.origin+'/options_url').subscribe(res=> {
			sessionStorage.setItem('mail_url', res.mail_url)
		  })
}

	sendmail(user: object): Observable<User> {
		return this.http.post<User>(sessionStorage.getItem('mail_url'), user);
	}
}
