import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../users/user';

export class Comment {
	title: string;
	body: string;
	author: User;
	timestamp: Date;
}

export class Startup {
	_id: string;
	companyName: string;
	fundingStage: string;
	engaged: boolean;
	typeOfTech: string;
	summary: string;
	website: string;
	potentialApplications: object[] = [{ value: '' }];
	securityLevel: number;
	comments: Comment[];
	createdTimestamp: Date;
	modifiedTimestamp: Date;
	author: User;
}

@Injectable()
export class StartupService {

	constructor(private http: HttpClient) {
	}

	addStartup(startup: Startup): Observable<Startup> {
		console.log('Adding startup: ', startup);
		return this.http.post<Startup>('http://localhost:3000/startups/', startup);
	}

	updateStartup(startup: Startup): Observable<Startup> {
		console.log('Updating startup: ', startup);
		return this.http.put<Startup>('http://localhost:3000/startups/' + startup._id, startup);
	}

	deleteStartup(startup: Startup): Observable<boolean> {
		console.log('Deleting startup: ', startup);
		return this.http.delete<boolean>('http://localhost:3000/startups/' + startup._id);
	}

	getStartup(startupID: string) {
		return this.http.get<Startup>('http://localhost:3000/startups/' + startupID);
	}

	getAllStartups(): Observable<Startup[]> {
		return this.http.get<Startup[]>('http://localhost:3000/startups/');
	}

}
