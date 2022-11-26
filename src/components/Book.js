import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const removeBookAction = (e) => {
    dispatch(deleteBook((e.target.id)));
  };

  return (
    <div className="book-details">
      <p className="book-author">{author}</p>
      <p className="book-title">{title}</p>
      <button
        type="button"
        id={id}
        className="remove-button"
        onClick={removeBookAction}
      >
        Remove Book
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};
export default Book;
