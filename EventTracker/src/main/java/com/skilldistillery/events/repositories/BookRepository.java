package com.skilldistillery.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.events.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	
	List <Book> findAll();

}
