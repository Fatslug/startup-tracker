import { UserService } from './users/user.service';
import { CanActivateAuthGuard } from './auth.guard';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { StartupService } from './startups/startup.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// MATERIAL IMPORTS
import {
	MatToolbarModule,
	MatButtonModule,
	MatGridListModule,
	MatInputModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { StartupListComponent } from './startups/startup-list/startup-list.component';
import { StartupFormComponent } from './startups/startup-form/startup-form.component';
import { StartupDetailsComponent } from './startups/startup-details/startup-details.component';
import { StartupItemComponent } from './startups/startup-item/startup-item.component';
import { StartupDeleteComponent } from './startups/startup-delete/startup-delete.component';

export const ROUTES: Routes = [
	{ path: '', component: StartupListComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'startup/:id', component: StartupDetailsComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'startups/add', component: StartupFormComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'startups/update/:id', component: StartupFormComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'startups/delete/:id', component: StartupDeleteComponent, canActivate: [CanActivateAuthGuard] },
	{ path: 'startups', component: StartupListComponent, canActivate: [CanActivateAuthGuard] }
];

@NgModule({
	declarations: [
		AppComponent,
		StartupListComponent,
		StartupFormComponent,
		StartupDetailsComponent,
		StartupItemComponent,
		LoginComponent,
		RegisterComponent,
		StartupDeleteComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(ROUTES),
		BrowserAnimationsModule,
		FlexLayoutModule,

		/** MATERIAL DESIGN MODULES */
		MatToolbarModule,
		MatButtonModule,
		MatGridListModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatCardModule
	],
	providers: [
		StartupService,
		CanActivateAuthGuard,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
