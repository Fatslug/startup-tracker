import { Injectable } from '@angular/core';
import { UserService } from './users/user.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

	constructor(private router: Router, private userService: UserService) {}

	canActivate() {
		if (this.userService.isLoggedIn()) {
			return true;
		} else {
			// Redirect the user before denying them access to this route
			this.router.navigate(['/login']);
			return false;
		}
	}
}
