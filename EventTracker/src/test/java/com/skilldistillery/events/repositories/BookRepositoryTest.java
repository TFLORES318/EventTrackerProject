package com.skilldistillery.events.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.events.entities.Book;

@SpringBootTest
class BookRepositoryTest {
	
	@Autowired
	private BookRepository bookRepo;
	
	@Test
	@DisplayName("find all books")
	void test_findAllBooks() {
		List <Book> books = bookRepo.findAll();
		assertNotNull(books);
		assertTrue(books.size() > 0);
	}

	@Test
	@DisplayName("find a single book")
	void test_findById() {
		Optional <Book> bookOptional = bookRepo.findById(2);
		Book bookTest = bookOptional.get();
		assertEquals("One Day in December", bookTest.getTitle());
		assertEquals("Josie Silver", bookTest.getAuthor());
		assertEquals(393, bookTest.getPages());
		assertEquals("Penguin Random House", bookTest.getPublisher());
		assertEquals("9780525574682", bookTest.getIsbn());
		assertEquals("Romance", bookTest.getGenre());
		assertEquals("A story about love at first sight over the course of 10 years. "
				+ "Missed opportunities, life events continuing but the love is all "
				+ "still present of Laurie and Jack, while Jack is in a serious relationship "
				+ "with Sarah, when that is over, when Laurie gets married... This book will "
				+ "make you believe that you should always take a chance and make you think "
				+ "about the chances you missed.", bookTest.getSummary());
		
	}

}
