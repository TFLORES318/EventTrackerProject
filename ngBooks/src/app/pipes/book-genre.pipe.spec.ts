import { BookGenrePipe } from './book-genre.pipe';

describe('BookGenrePipe', () => {
  it('create an instance', () => {
    const pipe = new BookGenrePipe();
    expect(pipe).toBeTruthy();
  });
});
