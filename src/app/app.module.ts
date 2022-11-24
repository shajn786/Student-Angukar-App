import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { Routes, RouterModule } from '@angular/router';

const myRoute : Routes= [
 {
  path:"",component:StudentEntryComponent
 },
 {
  path:"search",component:StudentSearchComponent
 },
 {
  path:"view",component:StudentViewComponent
 }
]


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
