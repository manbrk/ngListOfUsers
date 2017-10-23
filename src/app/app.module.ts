import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClarityModule} from 'clarity-angular';
import {UserService} from './user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
