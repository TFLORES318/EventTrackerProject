import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './services/book.service';
import { BookGenrePipe } from './pipes/book-genre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookGenrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    BookGenrePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
