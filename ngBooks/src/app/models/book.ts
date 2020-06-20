export class Book {

  id: number;
  title: string;
  author: string;
  pages: number;
  summary: string;
  genre: string;
  yearPublished: string;
  publisher: string;
  isbn: string;


  constructor (id?:number, title?:string, author?:string, pages?:number,
    summary?:string, genre?:string, yearPublished?:string, publisher?:string,
    isbn?:string) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.summary = summary;
      this.genre = genre;
      this.yearPublished = yearPublished;
      this.publisher = publisher;
      this.isbn = isbn;
    }
}
