import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, percent, chapter,
  } = props;

  const removeBookAction = (e) => {
    dispatch(deleteBook((e.target.id)));
  };
  return (
    <div className="book-container">
      <div className="bookInfo">
        <div>
          <p className="book-title">{title}</p>
          <p className="book-author book-text">{author}</p>
        </div>
        <ul className="book-buttons">
          <li>
            <button
              className="book-text"
              type="button"
            >
              Comments
            </button>
          </li>

          <li className="vertical">|</li>

          <li>
            <button
              id={id}
              type="button"
              onClick={removeBookAction}
              className="book-text"
            >
              Remove
            </button>
          </li>

          <li className="vertical">|</li>

          <li>
            <button
              className="book-text"
              type="button"
            >
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="dFlex alignCenter">
        <div className="percentage-wheel" />
        <div className="completion-container">
          <span className="percentage-symbol">
            {percent}
            %
          </span>
          <span className="completed-text">Completed</span>
        </div>
      </div>
      <div className="currentChapter">
        <div>
          <h4 className="chapter-header">CURRENT CHAPTER</h4>
          <span className="chapter-number">{chapter}</span>
        </div>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,

};
export default Book;
