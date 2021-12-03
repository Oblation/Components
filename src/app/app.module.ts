import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { ContactsListComponent } from './contactslist/contactslist.component';
import { ContactsItemComponent } from './contactsitem/contactsitem.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorsComponent,
    GetterSetterComponent,
    ContactsListComponent,
    ContactsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
