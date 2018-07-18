import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';/* we can import class from the book-form-component */

import { AppComponent } from './app.component';/* we can import class from the app component */

@NgModule({
  declarations: [
    AppComponent,/* we have register the component in the declaration */
    BookFormComponent,
         
  ],
  imports: [
    BrowserModule,/* imported module like browser and forms */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]/* service providers i.e app component */
})
export class AppModule { }
