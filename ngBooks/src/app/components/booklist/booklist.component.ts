import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookDetail = null;

  books: Book[]= [];

  selectedBook = null;

  bookToEdit = null;

  selectedGenre: String = "all";

  genres = [
    'All Books','Romance', 'Thriller', 'Mystery', 'Novel'
  ]

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.index().subscribe(
      data => {
        this.books = data;
      },
      err => {
        console.error('The book list has failed in component with error: ' +err);
      }
    );
  }

  booksDetails(book) {
    this.selectedBook = book;
  }

  showBooks() {
    this.selectedBook = null;
  }

  createBook(bookForm: NgForm) {
    const book: Book = bookForm.value;

    this.bookService.createNewBook(book).subscribe(
      bookCreationSuccess => {
        console.log('BookList Component.createBook(): book works!');
        this.router.navigateByUrl('/books');
      },
      bookNotCreated => {
        console.error('BookListComponent.createBook(): error creating new book');
      }
    )
  }

  setEditBook() {
    this.bookToEdit = Object.assign({}, this.selectedBook);
  }

  editBook(bookEdit : Book) {
    this.bookService.updateBook(bookEdit.id, bookEdit).subscribe(
      data => {
      this.bookToEdit = null;
      this.loadBooks();
      },
      err => {
        console.error('edit book in component not functioning');
        console.error(err);
      }
    )

  }

  deleteBook(bookId: number) {
    this.bookService.destroy(bookId).subscribe(
      data => {
        this.loadBooks();
      },
      err => {
        console.error('cannot delete book record');
      }
    );
  }

}
