//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
    imgSrc: './assets/the_design_of_everyday_things.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
    imgSrc: './assets/the_most_human_human.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
    imgSrc: './assets/the_pragmatic_programmer.jpg',
  },
];

function createBookList(books) {
  const ul = document.createElement('ul');
  ul.classList.add('books-list');
  books.forEach((book) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
    li.classList.add('list-item');
    p.textContent = `${book.title} - ${book.author}`;
    img.src = book.imgSrc;
    img.setAttribute('alt', book.title);
    img.width = '140';
    img.style.margin = '10px';
    if (book.alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
  });
  return ul;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
