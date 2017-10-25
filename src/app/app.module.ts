import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClarityModule} from 'clarity-angular';
import {UserService} from './user.service';
import {SortService} from './sortable-column/sort.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    SortableColumnComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UserService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
