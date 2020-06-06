package com.skilldistillery.events.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.events.entities.Book;
import com.skilldistillery.events.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepo;

	@Override
	public Book createNewBookRecord(Book newBook) {
		return bookRepo.save(newBook);
	}

	@Override
	public List<Book> findAllBooks() {
		return bookRepo.findAll();
	}

	@Override
	public Book findBookById(int bookId) {
		Optional<Book> optionalBook = bookRepo.findById(bookId);
		Book managedBook = null;
		if (optionalBook != null) {
			managedBook = optionalBook.get();
		}
		return managedBook;
	}
	
	@Override
	public List<Book> booksByGenre(String genreRequested) {
		genreRequested = "%" +genreRequested+ "%";
		return bookRepo.findByGenreLike(genreRequested);
	}
	
	@Override
	public List<Book> booksByPageNumbers(int lowest, int highest) {
		return bookRepo.findByPagesGreaterThanEqualAndPagesLessThanEqual(lowest, highest);
	}

	@Override
	public Book updateBook(Book updateBook, int bookId) {
		Optional<Book> optionalBook = bookRepo.findById(bookId);
		Book managedBook = null;

		if (optionalBook.isPresent()) {
			managedBook = optionalBook.get();

			managedBook.setTitle(updateBook.getTitle());
			managedBook.setAuthor(updateBook.getAuthor());
			managedBook.setPages(updateBook.getPages());
			managedBook.setSummary(updateBook.getSummary());
			managedBook.setEnabled(updateBook.isEnabled());
			managedBook.setCoverImage(updateBook.getCoverImage());
			managedBook.setGenre(updateBook.getGenre());
			managedBook.setYearPublished(updateBook.getYearPublished());
			managedBook.setPublisher(updateBook.getPublisher());
			managedBook.setIsbn(updateBook.getIsbn());

			bookRepo.saveAndFlush(managedBook);

		}

		return managedBook;
	}

	@Override
	public boolean deleteBook(int bookId) {
		try {
			bookRepo.deleteById(bookId);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}


}
