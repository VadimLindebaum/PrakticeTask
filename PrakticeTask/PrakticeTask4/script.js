// Simple in-memory books array for demonstration
const books = [];

// Wire Add Book button
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addBtn').addEventListener('click', addBook);
  showbooks();
});

function addBook() {
  const name = document.getElementById('name').value.trim();
  const author = document.getElementById('author').value.trim();
  const description = document.getElementById('description').value.trim();
  const pages = document.getElementById('pages').value.trim();

  if (!name) {
    alert('Please enter a book name');
    return;
  }

  books.push({ name, author, description, pages });

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('author').value = '';
  document.getElementById('description').value = '';
  document.getElementById('pages').value = '';

  showbooks();
}

function showbooks() {
  const out = document.getElementById('output');
  out.innerHTML = '';

  books.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <h2>book Number: ${index + 1}</h2>
      <p><strong>Book Name:</strong> ${escapeHtml(book.name)}</p>
      <p><strong>Author Name:</strong> ${escapeHtml(book.author)}</p>
      <p><strong>Book Description:</strong> ${escapeHtml(book.description)}</p>
      <p><strong>No. of Pages:</strong> ${escapeHtml(book.pages)}</p>
      <div class="actions">
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
      </div>
    `;
    out.appendChild(card);
  });
}

// Remove the book entry at the given index
function deletebook(index) {
  if (index < 0 || index >= books.length) return;
  books.splice(index, 1);
  showbooks();
}

// Placeholder for edit (keeps UI similar to screenshot)
function editBook(index) {
  const book = books[index];
  if (!book) return;
  document.getElementById('name').value = book.name;
  document.getElementById('author').value = book.author;
  document.getElementById('description').value = book.description;
  document.getElementById('pages').value = book.pages;
  // Remove original entry to mimic a simple edit flow
  books.splice(index, 1);
  showbooks();
}

// Basic HTML escape to avoid accidental markup injection
function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
