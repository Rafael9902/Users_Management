import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


import { DataTablesModule } from "angular-datatables";
import { UsersComponent } from './components/shared/users/users.component';
import { SearchComponent } from './components/shared/search/search.component';
import { UserComponent } from './components/shared/user/user.component';
import { CreateComponent } from './components/shared/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    SearchComponent,
    UserComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    DataTablesModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
