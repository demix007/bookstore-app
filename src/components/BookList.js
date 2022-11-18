import React from 'react';
import Book from './Book';
import FormBook from './Form';

class BookList extends React.PureComponent {
  render() {
    return (
      <div>
        <Book title="Book-Title 1" author="Book-Author 1" />
        <Book title="Book-Title 2" author="aBook-Author 2" />
        <Book title="Book-Title 3" author="Book-Author 3" />
        <FormBook />
      </div>
    );
  }
}
export default BookList;