import { StartupService, Startup } from './../startup.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-startup-list',
	templateUrl: './startup-list.component.html',
	styleUrls: ['./startup-list.component.css']
})
export class StartupListComponent implements OnInit {

	startups: Startup[];

	constructor(private startupService: StartupService) { }

	ngOnInit() {
		this.startupService.getAllStartups().subscribe(startups => {
			this.startups = startups;
		});
	}

}
