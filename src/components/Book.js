import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const removeBookHandler = (e) => {
    dispatch(removeBook(Number(e.target.id)));
  };

  return (
    <div className="book-details">
      <p className="book-author">{author}</p>
      <p className="book-title">{title}</p>
      <button
        type="button"
        id={id}
        className="remove-button"
        onClick={removeBookHandler}
      >
        Remove book
      </button>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};
export default Book;
