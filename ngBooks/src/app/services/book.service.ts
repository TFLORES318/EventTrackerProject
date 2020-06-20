import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/books'

  constructor(private http: HttpClient) { }

  // TODO: get, post, put. delete

  index() {
    return this.http.get<Book[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error with Books');
      })
    );
  }

  createNewBook(newBook: Book) {
    return this.http.post<Book>(this.url, newBook).pipe(
      catchError((err: any) => {
        console.error('error in service create book');
        return throwError('Error with creating Book');
      })
    );
  }

  updateBook(bookId: number, bookEdit: Book) {
    return this.http.put<Book>(this.url + '/' + bookId, bookEdit).pipe(
      catchError((err: any) => {
        console.error('error in update book service');
        return throwError('error in update');
      })
    );
  }

  destroy(id:number) {
    return this.http.delete<Book>(this.url + '/' + id).pipe(
      catchError((err:any) => {
        console.error('error in book service delete');
        return throwError('destroy for book service not working');
      })
    );
  }
}
