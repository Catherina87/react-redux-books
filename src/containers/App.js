import { connect } from 'react-redux';
import { setBooks } from '../actions/books';
//import { setFilter } from '../actions/filter';
import App from '../components/App';

const mapStateToProps = (state) => ({
  books: state.books.items,
  isReady: state.books.isReady,
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
