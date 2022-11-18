import React from 'react';

class FormBook extends React.PureComponent {
  render() {
    return (
      <div className="form-container">
        <form className="form">
          <input type="text" name="title" className="title-input" placeholder="Book Title" />
          <input type="text" name="author" className="author-input" placeholder="Book Author" />
          <button type="button" className="addBook-input" >Add book</button>
        </form>
      </div>
    );
  }
}
export default FormBook;