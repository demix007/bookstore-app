import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const BookForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const newBook = {
        id: uuidv4(),
        title,
        author,
      };

      dispatch(addNewBook(newBook));
      setAuthor('');
      setTitle('');
    }
  };

  const getTitle = (e) => setTitle(e.target.value);

  const getAuthor = (e) => setAuthor(e.target.value);

  return (
    <div className="form-container">
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form className="form">
        <input
          name="title"
          type="text"
          value={title}
          className="form-input"
          placeholder="Book Title"
          onChange={getTitle}
        />

        <input
          name="author"
          type="text"
          value={author}
          className="form-input"
          placeholder="Book Author"
          onChange={getAuthor}
        />

        <button
          type="button"
          className="addBook-button"
          onClick={addBookHandler}
        >
          Add book
        </button>
      </form>
    </div>
  );
};
export default BookForm;
