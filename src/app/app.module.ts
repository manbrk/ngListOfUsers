import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClarityModule} from 'clarity-angular';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
