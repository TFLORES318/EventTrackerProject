## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

This program is able to store records of the books a user has read. In this program, the title, author, summary, number of pages, year published, publishing company and more can be stored for each book.

Every year, I set a goal for myself to read two books a month. This program will be useful to keep track of the books read and also is a good sharing source if someone needs book recommendations.

There are many ways to filter the books based on what is being searched.


<p align="center"> <img src="https://i.imgur.com/jBxn2Gi.png"> </p>

#### Week 1
- This program contains one entity - Book which has a total of 13 fields

- The inserts of the Book Table were populated in MySQL Workbench.

- There is also a Book Controller, Book Service and Service Impl and Book Repository that extends JPA Repository for access of various CRUD operations.

- A Book Entity test was implemented to junit test fields as well as a Book Repository Test to test repository methods.

- Hibernate and JPA are integrated with Spring Boot for this project to build the back-end.

- In my experience, REST was more efficient to implement than MVC.

#### Week 2
- The front end of this program was built with Javascript and HTML.

- XMLHttpRequests are used in this program - data is displayed on the same web page whether it's creating a new book, viewing the book details or entire table of books, updating a book or deleting a book.

- The GET, PUT, POST and DELETE requests map to the controller methods created last week.

- The Javascript display page implements full CRUD.

- When creating a book, once all the fields are filled out on the form, the user will see their newly created book at the bottom of the table.

- Reading is used when viewing the book table. Also, a book row can be clicked and it will create a form in the bottom that displays the book details.

- If a user wants to select a book to edit or delete the record, the user can click somewhere in the row where the book is displayed. This opens a form at the bottom of the page. Once a book is edited, the updated information will display on the table. If the book is deleted, the book record will be erased from the table.

- Data aggregation is displayed at the top of the page. A function was made to add the total number of pages read from the mystery genre, this being my favorite book genre.

#### Week 3
- The front end of this program was built with HTML and Typescript through the framework model of Angular.

-  The program contains a model, component which contains the html and typescript, service and pipe.

- The angular program displays full CRUD - it uses Cross Origin to connect from it's port to the port that is handling the database from last week.

- This front end differs from last week - when a user comes to the main page, the book list is displayed as a table with bootstrap implementation.

- The create new book form is at the bottom of the screen and has bootstrap implementation.

- When a book row is clicked, the book details will display. Bootstrap is implemented in both unordered lists displaying the book information.

- A user can edit, delete or view all books from this page.

- When a user decides to edit a page, another form is displayed on a new view with all inputs pre-populated.

- The pipe implementation separates the books by genre.

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
#### Week 1
* MySQL, MySQL Workbench
* JPA/Hibernate
* Spring Tool Suite
* Spring Boot
* Spring Data JPA
* Git/Github
* Postman
* MAMP
* Atom

#### Week 2
* All of the above
* Visual Studio Code

#### Week 3
* All of the above

## Lessons Learned
#### Week 1
- CRUD with REST and the differences between MVC
- GET/POST/PUT/PATCH/DELETE HTTP methods mapping
- HTTP Servlet Request and Response
- Writing in JSON
- Using postman to test out api endpoints

#### Week 2
- CRUD in javascript
- XMLHttpRequests
- Better understanding of javascript syntax
- Building HTML elements in a javascript file
- Better understanding of JSON

#### Week 3
- CRUD in angular
- Pipe implementation
- Bootstrap integration in HTML
