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

document.querySelector("#addbook").addEventListener("click", function () {});
