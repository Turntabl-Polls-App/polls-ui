import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../app/model/poll'

@Injectable({
	providedIn: 'root'
})
export class SendmailService {
	constructor(private http: HttpClient) { }

	private mailurl = 'https://polls-angular-ui.herokuapp.com/sendmail'

	sendmail(user: object): Observable<User> {
		return this.http.post<User>(this.mailurl, user);
	}
}
