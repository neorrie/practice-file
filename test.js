const myLibrary = [];

function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(temptitle, tempauthor, temppages, tempisread) {
  let newbook = new Book(temptitle, tempauthor, temppages, tempisread);
  myLibrary.push(newbook);
}

function showLibrary() {
  myLibrary.forEach((book) => {
    const newdiv = document.createElement("div");
    const divtext = document.createTextNode(book.title);
    newdiv.appendChild(divtext);
    document.body.appendChild(newdiv);
  });
}
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);

showLibrary();
