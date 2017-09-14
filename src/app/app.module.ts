import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartupListComponent } from './startup-list/startup-list.component';
import { StartupFormComponent } from './startup-form/startup-form.component';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { StartupItemComponent } from './startup-item/startup-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupListComponent,
    StartupFormComponent,
    StartupDetailsComponent,
    StartupItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
