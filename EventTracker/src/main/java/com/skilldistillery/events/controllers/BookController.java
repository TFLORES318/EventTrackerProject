package com.skilldistillery.events.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.events.entities.Book;
import com.skilldistillery.events.services.BookService;

@RestController
@RequestMapping("api")
public class BookController {
	
	@Autowired
	private BookService bookSvc;
	
	@PostMapping("books")
	public Book create(@RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
		try {
			book = bookSvc.createNewBookRecord(book);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(book.getId());
			response.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			book = null;
		}
		return book;
	}
	
	
	@GetMapping("books") 
	public List <Book> index() {
		return bookSvc.findAllBooks();
	}
	
	@GetMapping("books/{bookId}") 
	public Book findBook(@PathVariable int bookId) {
		return bookSvc.findBookById(bookId);
	}
	
	
	@PutMapping("books/{bookId}")
	public Book updateBook(@RequestBody Book book, @PathVariable int bookId, HttpServletResponse response) {
		try {
			book = bookSvc.updateBook(book, bookId);
			response.setStatus(200);
			if (book == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			book = null;
		}
		return book;
		
	}
	
	
	@DeleteMapping("books/{bookId}")
	public void delete(@PathVariable int bookId, HttpServletResponse response) {
		try {
			if (bookSvc.deleteBook(bookId)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}
	

}