package com.skilldistillery.events.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	private String author;
	
	private int pages;
	
	private String summary;
	
	@Column(name="create_date")
	@CreationTimestamp
	private LocalDateTime created;
	
	@Column(name="update_date")
	@UpdateTimestamp
	private LocalDateTime updated;
	
	private boolean enabled;
	
	@Column(name="cover_image_url")
	private String coverImage;
	
	private String genre;
	
	@Column(name="year_published")
	private String yearPublished;
	
	private String publisher;
	
	private String isbn;

	
	
	public Book() {}


	public Book(int id, String title, String author, int pages, String summary, LocalDateTime created,
			LocalDateTime updated, boolean enabled, String coverImage, String genre, String yearPublished,
			String publisher, String isbn) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.summary = summary;
		this.created = created;
		this.updated = updated;
		this.enabled = enabled;
		this.coverImage = coverImage;
		this.genre = genre;
		this.yearPublished = yearPublished;
		this.publisher = publisher;
		this.isbn = isbn;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getCoverImage() {
		return coverImage;
	}

	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getYearPublished() {
		return yearPublished;
	}

	public void setYearPublished(String yearPublished) {
		this.yearPublished = yearPublished;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}


	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", author=" + author + ", pages=" + pages + ", summary="
				+ summary + ", created=" + created + ", updated=" + updated + ", enabled=" + enabled + ", coverImage="
				+ coverImage + ", genre=" + genre + ", yearPublished=" + yearPublished + ", publisher=" + publisher
				+ ", isbn=" + isbn + "]";
	}
	

}
