// DOM Elements
const booksList = document.getElementById('booksList');
const bookModal = document.getElementById('bookModal');
const bookForm = document.getElementById('bookForm');
const modalTitle = document.getElementById('modalTitle');
const addBookBtn = document.getElementById('addBookBtn');

// Event Listeners
addBookBtn.addEventListener('click', () => openModal());
bookForm.addEventListener('submit', handleSubmit);

// API Functions
async function fetchBooks() {
    try {
        const response = await fetch('/api/books');
        const data = await response.json();
        renderBooks(data.data);
    } catch (error) {
        showToast('Error fetching books', 'error');
    }
}

async function createBook(bookData) {
    try {
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });
        const data = await response.json();
        if (data.success) {
            showToast('Book created successfully', 'success');
            fetchBooks();
        }
    } catch (error) {
        showToast('Error creating book', 'error');
    }
}

async function updateBook(id, bookData) {
    try {
        const response = await fetch(`/api/books/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });
        const data = await response.json();
        if (data.success) {
            showToast('Book updated successfully', 'success');
            fetchBooks();
        }
    } catch (error) {
        showToast('Error updating book', 'error');
    }
}

async function deleteBook(id) {
    if (!confirm('Are you sure you want to delete this book?')) return;
    
    try {
        const response = await fetch(`/api/books/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (data.success) {
            showToast('Book deleted successfully', 'success');
            fetchBooks();
        }
    } catch (error) {
        showToast('Error deleting book', 'error');
    }
}

// UI Functions
function renderBooks(books) {
    booksList.innerHTML = books.map(book => `
        <div class="book-card">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <div class="button-group">
                <button class="btn-primary" onclick="openModal(${book.id}, '${book.title}', '${book.author}')">
                    Edit
                </button>
                <button class="btn-danger" onclick="deleteBook(${book.id})">
                    Delete
                </button>
            </div>
        </div>
    `).join('');
}

function openModal(id = null, title = '', author = '') {
    modalTitle.textContent = id ? 'Edit Book' : 'Add New Book';
    document.getElementById('bookId').value = id || '';
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    bookModal.style.display = 'block';
}

function closeModal() {
    bookModal.style.display = 'none';
    bookForm.reset();
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('bookId').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    
    if (id) {
        await updateBook(id, { title, author });
    } else {
        await createBook({ title, author });
    }
    
    closeModal();
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize
fetchBooks();