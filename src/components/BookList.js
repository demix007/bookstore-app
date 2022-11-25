import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.book);
  return (
    <div className="book_details">
      {books?.map((book) => (
        <Book
          id={book.id}
          author={book.author}
          title={book.title}
          key={book.id}
        />
      ))}
      <BookForm />
    </div>
  );
};
export default BookList;
