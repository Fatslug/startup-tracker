import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../users/user.service';

export interface Comment {
	title: string;
	body: string;
	author: User;
	timestamp: Date;
}

export class Startup {
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
	Author: User;
}

@Injectable()
export class StartupService {

	constructor(private http: HttpClient) {
	}

	addStartup(startup: Startup): Observable<Startup>{
		return this.http.post<Startup>('http://localhost:3000/startups/', startup);
	}

	getAllStartups(): Observable<Startup> {
		return this.http.get<Startup>('http://localhost:3000/startups/');
	}

}
