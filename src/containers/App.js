import { connect } from 'react-redux';
import { setBooks } from '../actions/books';
//import { setFilter } from '../actions/filter';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'all':
      return books;
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
}

const mapStateToProps = ({ books }) => ({
  // books: state.books.items,
  books: sortBy(books.items, books.filterBy),
  isReady: books.isReady,
  //filterBy: state.books.filterBy,
});

// const mapDispatchToProps = (dispatch) => ({
//   setBooks: (books) => dispatch(setBooks(books)),
// });

const actionCreators = {
  setBooks,
  //setFilter,
};

export default connect(mapStateToProps, actionCreators)(App);
