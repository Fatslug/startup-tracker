import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { deserialize, serialize } from 'serializer.ts/Serializer';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string;
	password: string;

	constructor(private userService: UserService, private router: Router) {
	}

	ngOnInit() {
		if (this.userService.isLoggedIn()) {
			console.log('User is logged in.');
		}
	}

	login(): void {
		console.log('Logging in...');
		this.userService.doLogin(this.username, this.password);
	}

	logout(): void {
		this.userService.doLogout();
		this.router.navigate(['/']);
		console.log('User logged out.');
	}

}
