const CHECKING_STATUS = 'bookstore/categories/CHECKING_STATUS';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Site under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKING_STATUS,
});

export default categoriesReducer;
