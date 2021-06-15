import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactformComponent } from './form/contactform/contactform.component';
import { ContactlistComponent } from './form/contactlist/contactlist.component';
import { ContactviewComponent } from './form/contactview/contactview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactService } from './service/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    ContactlistComponent,
    ContactviewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
