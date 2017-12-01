import { UserService } from './../../users/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StartupService, Startup, Comment } from './../startup.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-startup-form',
	templateUrl: './startup-form.component.html',
	styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent implements OnInit {

	private $routeParams: Subscription;
	startup: Startup;
	startupID: string;
	formType: string;
	comment: Comment = new Comment();

	constructor(
		private userService: UserService,
		private startupService: StartupService,
		private route: ActivatedRoute,
		private router: Router) {
	}

	ngOnInit() {
		this.$routeParams = this.route.params.subscribe(params => {
			this.startupID = params['id'];
			if (this.startupID) {
				this.startupService.getStartup(this.startupID).subscribe(startup => {
					console.log(startup);
					if (startup) {
						this.startup = startup;
						this.formType = 'update';
					} else {
						this.startup = new Startup();
						this.startup.engaged = false;
						this.formType = 'add';
					}
				});
			} else {
				this.startup = new Startup();
				this.startup.engaged = false;
				this.formType = 'add';
			}
		});
	}

	addApplication(): void {
		this.startup.potentialApplications.push({ value: '' });
	}
	removeApplication(index: number): void {
		this.startup.potentialApplications.splice(index, 1);
	}

	submitStartup(): void {
		console.log('Submitting startup...');
		this.startup.author = this.userService.currentUser;
		if (this.comment.body !== '') {
			this.startup.comments = [];
			this.comment.author = this.userService.currentUser;
			this.startup.comments.push(this.comment);
		}
		this.startupService.addStartup(this.startup).subscribe((result) => {
			console.log(result);
			if (result) {
				this.router.navigate(['/startups/view', result._id]);
			}
		});
	}

	updateStartup(): void {
		console.log('Updating startup...');
		this.startup.modifiedTimestamp = new Date();
		if (this.comment.body) {
			console.log(this.comment.body);
			this.comment.author = this.userService.currentUser;
			this.startup.comments.push(this.comment);
		}
		this.startupService.updateStartup(this.startup).subscribe((result) => {
			console.log(result);
			if (result) {
				this.router.navigate(['/startups/view', result._id]);
			}
		});
	}

}
