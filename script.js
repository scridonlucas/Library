//DOM
const modal = document.querySelector('.modal');
const newBook = document.querySelector('.new-book');
const closeButton = document.querySelector('.close-button');
const titleInput = document.querySelector('#form-title');
const authorInput = document.querySelector('#form-author');
const pagesInput = document.querySelector('#form-pages');
const readInput = document.querySelector('#form-checkbox');
const addButton = document.querySelector('.add-button');
const form = document.querySelector('#add-book');

let myLibrary = [];

newBook.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

closeButton.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  myLibrary.push(book);
  displayAll();
  modal.classList.toggle('show-modal');
}

function createBook(recievedBook) {
  let middle = document.querySelector('.middle'); // books layout
  let bookDiv = document.createElement('div');
  let titleH = document.createElement('h2');
  let authorDiv = document.createElement('div');
  let pagesDiv = document.createElement('div');
  let readButton = document.createElement('button');
  let removeButton = document.createElement('button');

  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', myLibrary.indexOf(recievedBook));

  titleH.classList.add('book-title');
  titleH.textContent = recievedBook.title;
  bookDiv.appendChild(titleH);

  authorDiv.classList.add('author');
  authorDiv.textContent = recievedBook.title;
  bookDiv.appendChild(authorDiv);

  pagesDiv.classList.add('pages');
  pagesDiv.textContent = recievedBook.pages + ' pages';
  bookDiv.appendChild(pagesDiv);

  readButton.classList.add('read');
  if (recievedBook.read === true) {
    readButton.textContent = 'Read';
  }
  if (recievedBook.read === false) {
    readButton.textContent = 'Not Read';
  }
  bookDiv.appendChild(readButton);
  removeButton.classList.add('remove');
  removeButton.textContent = 'Remove';
  bookDiv.appendChild(removeButton);
  bookDiv.appendChild(removeButton);
  middle.appendChild(bookDiv);

  readButton.addEventListener('click', () => {
    if (recievedBook.read === true) {
      recievedBook.read = false;
    } else {
      recievedBook.read = true;
    }
    displayAll();
  });

  removeButton.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(recievedBook), 1);
    displayAll();
  });
}

function displayAll() {
  let books = document.querySelectorAll('.book');
  books.forEach((book) => book.remove());
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}
