import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';


const BookForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const addBookHandler = () => {
    if (title !== "" && author !== ""){
      dispatch(addBook(author, title, counter));
      setCounter(counter + 1);
      setAuthor("");
      setTitle("");
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <input
          name="title"
          type="text" 
          value={ title }
          className="title-input"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          name="author"
          type="text" 
          value={ author}
          className="title-input"
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          type="button" 
          className="addBook-input"
          onClick={addBookHandler}  
        >
            Add book
        </button>
      </form>
    </div>
  );
}
export default BookForm;