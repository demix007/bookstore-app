import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.PureComponent {
  render() {
    const { author, title } = this.props;
    return (
      <div className='book-details'>
        <p className="book-author">{author}</p>
        <p className="book-title">{title}</p>
        <button type="button" className='remove-button'>Remove book</button>
      </div>
    );
  }
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;