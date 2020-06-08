## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

This program is able to store records of the books a user has read. In this program, the title, author, summary, number of pages, year published, publishing company and more can be stored for each book.

Every year, I set a goal for myself to read two books a month. This program will be useful to keep track of the books read and also is a good sharing source if someone needs book recommendations.

There are many ways to filter the books based on what is being searched.


<p align="center"> <img src="https://i.imgur.com/jBxn2Gi.png"> </p>

- This program contains one entity - Book which has a total of 13 fields

- The inserts of the Book Table were populated in MySQL Workbench.

- There is also a Book Controller, Book Service and Service Impl and Book Repository that extends JPA Repository for access of various CRUD operations.

- A Book Entity test was implemented to junit test fields as well as a Book Repository Test to test repository methods.

- Hibernate and JPA are integrated with Spring Boot for this project to build the back-end.

- In my experience, REST was more efficient to implement than MVC.

## API Endpoints

| Returns     | Verb           | URI           | Description    |
|-------------|----------------|---------------|----------------|
| `Book`        | `POST`           | `api/books`     | `Creates a new book record` |
| `List<Book>`      | `GET`           | `api/books`          | `Retrieve list of books` |
| `Book`      | `GET`            | `api/books/{id}`          | `Retrieves a book by id` |
| `Book`       | `GET`           | `api/books/titleorsummary/{keyword}` | `Retrieves a list of book by keyword match in title or summary` |
| `List<Book>` | `GET`           | `api/books/search/{genre}` | `Retrieve list of books by genre` |
| `List<Book>`  | `GET`          | `api/books/search/{minPage}/{maxPage}` | `Retrieve list of books within number of pages range` |
| `Book`        | `PUT`          | `api/books/{id}`   | `Updates an existing book by id` |
| `void`       | `DELETE`        | `api/books/{id}`   | `Deletes an existing book by id` |


- The first URI in the chart below is where a user will create a new book record to be stored into the database.
- The second URI can retrieve a book's information by entering in it's unique id.
- The third URI can retrieve a list of all the books currently stored in the database.
- The fourth URI can retrieve a list of all the books that match the keyword entered in if there is a match in the title or the summary.
- The fifth URI can retrieve a list of all the books from a given genre.
- The sixth URI can retrieve a list of all the books within a specific page range.
- The seventh URI can update the fields in a book record.
- The eighth URI can delete a book record.

- http://13.59.127.124:8080/EventTracker

## Technologies Used
* MySQL, MySQL Workbench
* JPA/Hibernate
* Spring Tool Suite
* Spring Boot
* Spring Data JPA
* Git/Github
* Postman
* MAMP
* Atom

## Lessons Learned
- CRUD with REST and the differences between MVC
- GET/POST/PUT/PATCH/DELETE HTTP methods mapping
- HTTP Servlet Request and Response
- Writing in JSON
- Using postman to test out api endpoints
