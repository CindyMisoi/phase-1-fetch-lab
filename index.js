function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res=> res.json())
  .then(books => books.forEach(book =>{
    renderBooks(book)
  }))
}
function renderBooks(book) {
const main = document.querySelector('main');
const h2 = document.createElement('h2');
h2.innerHTML = book.name;
main.appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
fetchBooks()
})

