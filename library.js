let myLibrary = [];

function Book() {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.info = function () {
      console.log(
        "The name of the book is " +
          this.title +
          " which is written by " +
          this.author +
          " and it has " +
          this.pages +
          " pages"
      );
    });
}
//to close the form
function closeForm() {
  document.getElementById("form").style.display = "none";
}
//function to add books
function toAddBooks(ev) {
  ev.preventDefault();
  const book = new Book(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pages = document.getElementById("pages").value)
  );
  myLibrary.push(book);
  document.querySelector("form").reset();
  closeForm();
  displayArray();
}

function displayArray() {
  const card = document.getElementById("cards");
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.setAttribute = "width:350px; height:400px;";
    card.style =
      "display:flex; flex-direction:column;margin:10px;border:2px solid beige;padding:10px;  ";
    const para1 = document.createElement("para");
    para1.textContent = " Title of book: " + myLibrary[i].title;
    const para2 = document.createElement("para");
    para2.textContent = " Author of book: " + myLibrary[i].author;
    const para3 = document.createElement("para");
    para3.textContent = " Pages of book: " + myLibrary[i].pages;

    const btnr = document.createElement("button");
    btnr.textContent = "Reading Status-Read";
    btnr.style =
      "width:200px; padding:10px; border-radius:10px; background-color:rgb(32, 7, 54);color:beige;";
    const btnn = document.createElement("button");
    btnn.textContent = "Remove";
    btnn.style =
      "width:200px; padding:10px; border-radius:10px; background-color:rgb(32, 7, 54);color:beige;";
    btnn.setAttribute = ("id", "remove");
    cards.appendChild(card);
    card.appendChild(para1);
    card.appendChild(para2);
    card.appendChild(para3);

    card.appendChild(btnr);
    card.appendChild(btnn);

    btnn.addEventListener("click", () => {
      cards.removeChild(card);
      card.removeChild(para1);
      card.removeChild(para2);
      card.removeChild(para3);
      card.removeChild(btnn);
    });
    btnr.addEventListener("click", () => {
      if (btnr.textContent == "Reading Status-Read") {
        btnr.textContent = "Reading Status-Not Read";
        btnr.style =
          "width:200px; padding:10px; border-radius:10px; background-color:rgb(32, 7, 54);color:beige;";
      } else if (btnr.textContent == "Reading Status-Not Read") {
        btnr.textContent = "Reading Status-Read";
      }
    });
    myLibrary.pop();
  }
}

function openForm() {
  document.getElementById("form").style.display = "block";
}
//to open form that add books
const btn = document.querySelector("#open-form");
btn.addEventListener("click", () => openForm());
//to add books to the object
const addBook = document.querySelector("#addbook");
addBook.addEventListener("click", toAddBooks);
