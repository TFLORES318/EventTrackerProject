import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/books'

  constructor() { }

  // TODO: get, post, put. delete
}
