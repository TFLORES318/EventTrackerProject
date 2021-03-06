package com.skilldistillery.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.events.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	
	List <Book> findAll();
	
	List <Book> findByGenreLike(String genre);
	
	List <Book> findByPagesGreaterThanEqualAndPagesLessThanEqual(int lowest, int highest);
	
	List <Book> findByTitleLikeOrSummaryLike(String title, String summary);

}
