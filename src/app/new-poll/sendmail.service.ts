import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class SendmailService {
	constructor(private http: HttpClient) {}

	private mailrl = 'https://polls-angular-ui.herokuapp.com/sendmail';
	// private mailrl = 'http://localhost:8080/sendmail';

	sendmail(user: string): Observable<User> {
		return this.http.get<User>(this.mailrl + '?email=' + user);
	}
}
