/**
 * Book model class
 * @class Book
 */
class Book {
  /**
   * Create a book
   * @param {number} id - The book ID
   * @param {string} title - The book title
   * @param {string} author - The book author
   */
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Book;