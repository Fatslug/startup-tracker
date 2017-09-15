import { StartupService, Startup } from './../startup.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-startup-form',
	templateUrl: './startup-form.component.html',
	styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent implements OnInit {
	@Input() readOnly: boolean;
	@Input() startup: Startup;

	constructor(private startupService: StartupService) {
	}

	ngOnInit() {
		if (!this.startup) {
			this.startup = new Startup();
		}
	}

	addApplication(): void {
		this.startup.potentialApplications.push({ value: '' });
	}
	removeApplication(index: number): void {
		this.startup.potentialApplications.splice(index, 1);
	}

	submitStartup(): void {
		console.log('Submitting startup...');
		this.startupService.addStartup(this.startup).subscribe((result) => {
			console.log(result);
		});
	}

}
