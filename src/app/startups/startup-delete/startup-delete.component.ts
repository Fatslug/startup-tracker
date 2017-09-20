import { ActivatedRoute, Router } from '@angular/router';
import { StartupService, Startup } from './../startup.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-startup-delete',
	templateUrl: './startup-delete.component.html',
	styleUrls: ['./startup-delete.component.css']
})
export class StartupDeleteComponent implements OnInit {

	private $routeParams: Subscription;
	private $startup: Subscription;
	startup: Startup;
	startupID: string;

	constructor(private startupService: StartupService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.$routeParams = this.route.params.subscribe(params => {
			this.startupID = params['id'];
			this.$startup = this.startupService.getStartup(this.startupID).subscribe(startup => {
				console.log(startup);
				this.startup = startup;
			});
		});
	}

	confirm(): void {
		console.log('Delete confirmed');
		this.startupService.deleteStartup(this.startup).subscribe(result => {
			this.router.navigate(['/startups']);
		});
	}

	reject(): void {
		console.log('Delete rejected');
		this.router.navigate(['/startup', this.startup._id]);
	}

}
