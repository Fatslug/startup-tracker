import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

import { deserialize, serialize } from 'serializer.ts/Serializer';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class UserService {

	currentUser: User;

	constructor(private http: HttpClient) {
		console.log('Current User: ', this.currentUser);
	}

	isLoggedIn(): boolean {
		// Is there a user in local storage?
		// Is there a user in our service?
		// Are these users the same?
		const userCookie = JSON.parse(localStorage.getItem('currentUser'));
		if (userCookie && this.currentUser && (userCookie.userID === this.currentUser._id)) {
			return true;
		} else {
			localStorage.removeItem('currentUser');
			this.currentUser = null;
			return false;
		}
	}

	doLogin(username, password): Promise<boolean> {
		let headers = new HttpHeaders();
		headers = headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
		headers = headers.append('Content-Type', 'application/json');
		return new Promise((resolve, reject) => {
			this.http.post<User>('http://localhost:8000/auth/basic', {
				type: 'login'
			}, {
				headers: headers
			}).subscribe(user => {
				if (user._id) {
					resolve(this.setCurrentUser(user));
				} else {
					reject('Invalid username/password');
				}
			});
		});
	}

	doRegister(username, password): void {
		this.http.post<User>('http://localhost:8000/register', {
			type: 'register',
			username: username,
			password: password
		}).subscribe(user => {
			this.setCurrentUser(user);
		});
	}

	doLogout(): void {
		this.currentUser = null;
		localStorage.removeItem('currentUser');
	}

	getUserById(id: string): Promise<User> {
		return new Promise((resolve, reject) => {
			this.http.get<User>('http://localhost:8000/user/' + id).subscribe(res => {
				const user = res;
				this.currentUser = user;
				resolve(user);
			});
		});
	}

	setCurrentUser(user: User): boolean {
		this.currentUser = user;
		localStorage.setItem('currentUser', JSON.stringify({ userID: user._id, timestamp: new Date() }));
		return true;
	}

	getCurrentUser(): User {
		return this.currentUser;
	}

	getAllUsers() {
		return new Promise((resolve, reject) => {
			this.http.get('http://localhost:8000/users').subscribe(res => {
				console.log(res);
				resolve(res);
			});
		});
	}
}
