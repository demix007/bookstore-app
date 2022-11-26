import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.categories);

  const statusButtonHandler = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };
  return (
    <div className="status-container">
      <button
        type="submit"
        className="status-button"
        onClick={statusButtonHandler}
      >
        Check Status
      </button>
      <h1 className="status-message">{message}</h1>
    </div>
  );
};

export default Categories;
