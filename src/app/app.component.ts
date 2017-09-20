import { StartupFormComponent } from './startups/startup-form/startup-form.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	tiles = [
		{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
		{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
	];

	constructor(private router: Router) {
	}

}
