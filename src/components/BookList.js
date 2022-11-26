import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="book-div">
      <div className="book-details">
        {books?.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.id}
            percent={book.percent}
            chapter={book.chapter}
          />
        ))}
      </div>
      <BookForm />
    </div>
  );
};
export default BookList;
