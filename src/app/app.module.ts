import { UserService } from './users/user.service';
import { CanActivateAuthGuard } from './auth.guard';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { StartupService } from './startups/startup.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartupListComponent } from './startups/startup-list/startup-list.component';
import { StartupFormComponent } from './startups/startup-form/startup-form.component';
import { StartupDetailsComponent } from './startups/startup-details/startup-details.component';
import { StartupItemComponent } from './startups/startup-item/startup-item.component';

import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
	{ path: '', component: StartupListComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'startup/add', component: StartupFormComponent },
	{ path: 'startups', component: StartupListComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		StartupListComponent,
		StartupFormComponent,
		StartupDetailsComponent,
		StartupItemComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [
		StartupService,
		CanActivateAuthGuard,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
