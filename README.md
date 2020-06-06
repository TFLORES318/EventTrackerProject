## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

This program is able to store records of the books a user has read. In this program, the title, author, summary, number of pages, year published, publishing company and more can be stored for each book.

Every year, I set a goal for myself to read two books a month. This program will be useful to keep track of the books read and also is a good sharing source if someone needs book recommendations.

There are many ways to filter the books based on your wants and more can be built upon suggestion.


- This program contains one entity - book which has a total of 13 fields
<img src = "https://i.imgur.com/jBxn2Gi.png">

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


## Technologies Used
* MySQL, MySQL Workbench
* JPA/Hibernate
* Spring Boot
* Spring Data JPA
* Git/Github
* Postman

## Lessons Learned
