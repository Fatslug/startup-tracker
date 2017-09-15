import { StartupService } from './startups/startup.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartupListComponent } from './startups/startup-list/startup-list.component';
import { StartupFormComponent } from './startups/startup-form/startup-form.component';
import { StartupDetailsComponent } from './startups/startup-details/startup-details.component';
import { StartupItemComponent } from './startups/startup-item/startup-item.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		StartupListComponent,
		StartupFormComponent,
		StartupDetailsComponent,
		StartupItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		StartupService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
