import { Injectable } from '@angular/core';

export interface User {
	username: string;
	email: string;
	password: string;
}

@Injectable()
export class UserService {

	constructor() { }

}
