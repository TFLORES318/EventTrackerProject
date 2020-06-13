
window.addEventListener('load', function(e) {
	e.preventDefault();
	init();
});

function init() {
	console.log('script.js loaded');
	loadBookList();
	document.newBook.addBook.addEventListener('click', function(event) {
		event.preventDefault();
		createBook();
	})
}

function loadBookList() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books');

	console.log('woohoo');
	
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log('Response received');
			
					var booksToShow = JSON.parse(xhr.responseText);
					displayBooks(booksToShow);
				
			} else if (xhr.status >= 400) {
				console.error('Book not found');
				var noBooks = document.getElementById('bookList');
				noBooks.textContent = 'There are no books';
			}
		
	}
	xhr.send();
}
	
function displayBooks(books) {
	var bookList = document.getElementById('bookList');
	bookList.textContent = '';

	var bookItemsTable = document.createElement('table');
	bookItemsTable.id = 'bookItemsTable';
	var bookItemsTableHead = document.createElement('thead');
	var bookItemsTableHeaderRow = document.createElement('tr')
	var bookItemsTableHeaderTitle = document.createElement('th');
	var bookItemsTableHeaderAuthor = document.createElement('th');
	var bookItemsTableHeaderPages = document.createElement('th');
	var bookItemsTableHeaderSummary = document.createElement('th');
	var bookItemsTableHeaderGenre = document.createElement('th');
	var bookItemsTableHeaderYearPublished = document.createElement('th');
	var bookItemsTableHeaderPublisher = document.createElement('th');
	var bookItemsTableHeaderISBN = document.createElement('th');

	bookItemsTableHeaderTitle.textContent = 'Title';
	bookItemsTableHeaderAuthor.textContent = 'Author';
	bookItemsTableHeaderPages.textContent = 'Pages';
	bookItemsTableHeaderSummary.textContent = 'Summary';
	bookItemsTableHeaderGenre.textContent = 'Genre';
	bookItemsTableHeaderYearPublished.textContent = 'Year Published';
	bookItemsTableHeaderPublisher.textContent = 'Publisher';
	bookItemsTableHeaderISBN.textContent = 'ISBN';

	bookList.appendChild(bookItemsTable);
	bookItemsTable.appendChild(bookItemsTableHead);
	bookItemsTable.appendChild(bookItemsTableHeaderRow);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderTitle);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderAuthor);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderPages);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderSummary);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderGenre);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderYearPublished);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderPublisher);
	bookItemsTableHeaderRow.appendChild(bookItemsTableHeaderISBN);

	for (let index = 0; index < books.length; index++) {
		let row = document.createElement('tr');
		row.id = books[index].id;
		let title = document.createElement('td');
		title.textContent = books[index].title;
		let author = document.createElement('td');
		author.textContent = books[index].author
		let pages = document.createElement('td');
		pages.textContent = books[index].pages
		let summary = document.createElement('td');
		summary.textContent = books[index].summary
		let genre = document.createElement('td');
		genre.textContent = books[index].genre;
		let yearPublished = document.createElement('td');
		yearPublished.textContent = books[index].yearPublished
		let publisher = document.createElement('td');
		publisher.textContent = books[index].publisher
		let isbn = document.createElement('td');
		isbn.textContent = books[index].isbn

		row.appendChild(title);
		row.appendChild(author);
		row.appendChild(pages);
		row.appendChild(summary);
		row.appendChild(genre);
		row.appendChild(yearPublished);
		row.appendChild(publisher);
		row.appendChild(isbn);
		row.addEventListener('click', function(event) {
			event.preventDefault();
			getBook(books[index].id);
		});

		bookItemsTable.appendChild(row);
	}
	
}	

function getBook(bookId) {
	console.log('helo');
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books/'+bookId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			console.log('Response received');
			if (xhr.status === 200) {
				console.log('success');
				try {
					var book = JSON.parse(xhr.responseText);
					displayBook(book);
				} catch (e) {
					console.error('Book Not Found');
					var noBook = document.getElementById('bookDetails');
					noBook.textContent = 'Book Not Found';
				}
			} else {
				console.error('Book Not Found');
				var noBook = document.getElementById('bookDetails');
				noBook.textContent = 'Book Not Found';
			}
		}
	}
	xhr.send();
}

function displayBook(book) {
	console.log('itworks');
	var bookDetails = document.getElementById('bookDetails');
	bookDetails.textContent = '';
	var displayBookForm = document.createElement('form');
	displayBookForm.name = 'bookForm';
	displayBookForm.id = 'bookForm';

	let title = document.createElement('input');
	let labelTitle = displayBookForm.appendChild(document.createElement('label'));
	labelTitle.textContent = 'Title';
	displayBookForm.appendChild(document.createElement('br'));
	title.name = 'title';
	title.type = 'text';
	title.value = book.title;
	displayBookForm.appendChild(title);
	displayBookForm.appendChild(document.createElement('br'));

	let author = document.createElement('input');
	let labelAuthor = displayBookForm.appendChild(document.createElement('label'));
	labelAuthor.textContent = 'Author';
	displayBookForm.appendChild(document.createElement('br'));
	author.name = 'author';
	author.type = 'text';
	author.value = book.author;
	displayBookForm.appendChild(author);
	displayBookForm.appendChild(document.createElement('br'));

	let pages = document.createElement('input');
	let labelPages = displayBookForm.appendChild(document.createElement('label'));
	labelPages.textContent = 'Pages';
	displayBookForm.appendChild(document.createElement('br'));
	pages.name = 'pages';
	pages.type = 'number';
	pages.value = book.pages;
	displayBookForm.appendChild(pages);
	displayBookForm.appendChild(document.createElement('br'));
	
	let summary = document.createElement('input');
	let labelSummary = displayBookForm.appendChild(document.createElement('label'));
	labelSummary.textContent = 'Summary';
	displayBookForm.appendChild(document.createElement('br'));
	summary.name = 'summary';
	summary.type = 'text';
	summary.value = book.summary;
	displayBookForm.appendChild(summary);
	displayBookForm.appendChild(document.createElement('br'));

	let genre = document.createElement('input');
	let labelGenre = displayBookForm.appendChild(document.createElement('label'));
	labelGenre.textContent = 'Genre';
	displayBookForm.appendChild(document.createElement('br'));
	genre.name = 'genre';
	genre.type = 'text';
	genre.value = book.genre;
	displayBookForm.appendChild(genre);
	displayBookForm.appendChild(document.createElement('br'));

	let yearPublished = document.createElement('input');
	let labelYearPublished = displayBookForm.appendChild(document.createElement('label'));
	labelYearPublished.textContent = 'Year Published';
	displayBookForm.appendChild(document.createElement('br'));
	yearPublished.name = 'yearPublished';
	yearPublished.type = 'text';
	yearPublished.value = book.yearPublished;
	displayBookForm.appendChild(yearPublished);
	displayBookForm.appendChild(document.createElement('br'));

	let publisher = document.createElement('input');
	let labelPublisher = displayBookForm.appendChild(document.createElement('label'));
	labelPublisher.textContent = 'Publisher';
	displayBookForm.appendChild(document.createElement('br'));
	publisher.name = 'publisher';
	publisher.type = 'text';
	publisher.value = book.publisher;
	displayBookForm.appendChild(publisher);
	displayBookForm.appendChild(document.createElement('br'));
	
	let isbn = document.createElement('input');
	let labelIsbn = displayBookForm.appendChild(document.createElement('label'));
	labelIsbn.textContent = 'Isbn';
	displayBookForm.appendChild(document.createElement('br'));
	isbn.name = 'isbn';
	isbn.type = 'text';
	isbn.value = book.isbn;
	displayBookForm.appendChild(isbn);
	displayBookForm.appendChild(document.createElement('br'));
	
	let submitEdit = document.createElement('input');
	submitEdit.name = 'submitEdit';
	submitEdit.type = 'submit';
	submitEdit.value = 'Edit Book';
	displayBookForm.appendChild(submitEdit);
	submitEdit.addEventListener('click', function(e) {
		e.preventDefault();
		updateBook(book.id);
	});
	displayBookForm.appendChild(document.createElement('br'));

	let submitDelete = document.createElement('input');
	submitDelete.name = 'submitDelete';
	submitDelete.type = 'submit';
	submitDelete.value = 'Delete Book';
	submitDelete.addEventListener('click', function(e) {
		e.preventDefault();
		bookDelete(book.id);
	});
	displayBookForm.appendChild(submitDelete);

	bookDetails.appendChild(displayBookForm);

}



function bookDelete(bookId) {
	console.log('hello');
	
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/books/'+bookId);

	xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		console.log('Response received');
		if (xhr.status === 204) {
			console.log('success book deleted');
			loadBookList();
		} else {
			console.error('Book Not Deleted');
			var noBook = document.getElementById('bookDetails');
			noBook.textContent = 'Book Not Deleted';
		}
	}
}
	xhr.send();
}


function createBook() {
	let bookForm = document.newBook;
	let book = {};
	book.title = bookForm.title.value;
	book.author = bookForm.author.value;
	book.pages = bookForm.pages.value;
	book.summary = bookForm.summary.value;
	book.genre = bookForm.genre.value;
	book.yearPublished = bookForm.yearPublished.value;
	book.publisher = bookForm.publisher.value;
	book.isbn = bookForm.isbn.value;
	console.log(book);
	newBook(book);

}


function newBook(book) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/books');
	
	xhr.setRequestHeader("Content-type", "application/json");
	let bookJSON = JSON.stringify(book);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 ) {
		  if ( xhr.status == 200 || xhr.status == 201 ) { 
			try {
				var newBook = JSON.parse(xhr.responseText); 
				loadBookList();
		  } catch (e) {
			  console.log("POST request failed.");
			  console.error(xhr.status + ': ' + xhr.responseText);
		  }
		  }
		  else {
			console.log("POST request failed.");
			console.error(xhr.status + ': ' + xhr.responseText);
		  }
		}
	  }
	  xhr.send(bookJSON);

}

function updateBook(bookId) {
	book = {};
	book.id = bookId;
	book.title = bookForm.title.value;
	book.author = bookForm.author.value;
	book.pages = bookForm.pages.value;
	book.summary = bookForm.summary.value;
	book.genre = bookForm.genre.value;
	book.yearPublished = bookForm.yearPublished.value;
	book.publisher = bookForm.publisher.value;
	book.isbn = bookForm.isbn.value;
	console.log(book);
	updateBookRequest(book, bookId);
}


function updateBookRequest(book, bookId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/books/'+bookId);
	
	xhr.setRequestHeader("Content-type", "application/json");
	let bookJSON = JSON.stringify(book);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 ) {
		  if ( xhr.status == 200 || xhr.status == 201 ) { 
			try {
				var updatedBook = JSON.parse(xhr.responseText); 
				loadBookList();
		  } catch (e) {
			  console.log("POST request failed.");
			  console.error(xhr.status + ': ' + xhr.responseText);
		  }
		  }
		  else {
			console.log("POST request failed.");
			console.error(xhr.status + ': ' + xhr.responseText);
		  }
		}
	  }
	  xhr.send(bookJSON);

}


