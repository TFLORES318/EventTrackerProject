package com.skilldistillery.events.services;

import java.util.List;

import com.skilldistillery.events.entities.Book;

public interface BookService {
	
	Book createNewBookRecord(Book newBook);
	
	List <Book> findAllBooks();
	
	Book findBookById(int id);
	
	List <Book> booksByGenre(String genreRequested);
	
	List<Book> booksByPageNumbers(int lowest, int highest);
	
	Book updateBook(Book updateBook, int bookId);
	
	boolean deleteBook(int bookId);

}
