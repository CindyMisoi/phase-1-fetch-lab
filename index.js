function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res=> res.json())
  .then(data=>{
    renderBooks(data)
  })
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

