import { createAsyncThunk } from '@reduxjs/toolkit';

const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYvefzS5gcHT0i7sKve7/books';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const fetchBook = (data) => ({
  type: FETCH_BOOK,
  data,
});

const addBook = (title, author, id) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkApi) => fetch(appUrl)
    .then((response) => response.json())
    .then((data) => {
      thunkApi.dispatch(fetchBook(Object.entries(data)));
    }),
);

const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (obj1, thunkApi) => {
    const { author, id, title } = obj1;
    return fetch(appUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category: 'MANGA',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.ok) {
          thunkApi.dispatch(addBook(author, title, id));
        }
      });
  },
);

const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkApi) => fetch(`${appUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      if (res.ok) {
        thunkApi.dispatch(removeBook(id));
      }
    }),
);

const bookReducer = (state = [], action) => {
  const bookList = [];
  const chapter = ['Introduction', 'Chapter 5', 'Chapter 6', 'Chapter 9', 'Chapter 12'];
  const percentageArray = [1, 40, 56, 70, 90];
  switch (action.type) {
    case FETCH_BOOK:
      action.data.forEach((item) => {
        const indexChapter = Math.floor(Math.random() * percentageArray.length);
        const newbook = {
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
          percent: percentageArray[indexChapter],
          chapter: chapter[indexChapter],
        };
        bookList.push(newbook);
      });
      return [
        ...bookList,
      ];
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
};

export {
  deleteBook, addNewBook, removeBook, addBook, getBooks,
};
export default bookReducer;
