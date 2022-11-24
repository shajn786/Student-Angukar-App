import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
