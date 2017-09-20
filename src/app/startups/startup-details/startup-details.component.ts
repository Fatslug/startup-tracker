import { Subscription } from 'rxjs/Subscription';
import { StartupService, Startup, Comment } from './../startup.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-startup-details',
	templateUrl: './startup-details.component.html',
	styleUrls: ['./startup-details.component.css']
})
export class StartupDetailsComponent implements OnInit, OnDestroy {

	private $routeParams: Subscription;
	private $startup: Subscription;
	startupID: string;
	startup: Startup;
	comment: Comment = new Comment();

	constructor(private startupService: StartupService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.$routeParams = this.route.params.subscribe(params => {
			this.startupID = params['id'];
			this.$startup = this.startupService.getStartup(this.startupID).subscribe(startup => {
				console.log(startup);
				this.startup = startup;
			});
		});
	}

	updateStartup(): void {
		console.log('Updating startup...');
		this.startup.modifiedTimestamp = new Date();
		this.startup.comments.push(this.comment);
		this.startupService.updateStartup(this.startup).subscribe((result) => {
			console.log(result);
		});
	}

	ngOnDestroy() {
		this.$routeParams.unsubscribe();
		this.$startup.unsubscribe();
	}

}
