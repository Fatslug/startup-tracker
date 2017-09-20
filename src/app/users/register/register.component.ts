import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	firstName: string;
	lastName: string;
	username: string;
	password: string;

	constructor(private userService: UserService) { }

	ngOnInit() {
	}

	register(): void {
		this.userService.doRegister(this.username, this.password, this.firstName, this.lastName);
	}

}
