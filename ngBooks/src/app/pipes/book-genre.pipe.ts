import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookGenre'
})
export class BookGenrePipe implements PipeTransform {

  transform(bookArr: Book[], type: String): Book[] {
    let result = [];

    if (type === 'All Books') {
      return bookArr;
    }

    for (let index = 0; index < bookArr.length; index++) {
          if (bookArr[index].genre === type) {
            result.push(bookArr[index]);
          }
      }
      return result;
    }

  }


