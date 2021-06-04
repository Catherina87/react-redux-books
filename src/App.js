import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('http://localhost:3000/books.json').then((response) => {
      setBooks(response.data);
    });
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <ul>
        {!isReady
          ? 'Loading...'
          : books.map((book, index) => (
              <li key={index}>
                <b>{book.title}</b> - {book.author}
                <img src={book.image} alt="attr"></img>
              </li>
            ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books.items,
  isReady: state.books.isReady,
});

// const mapDispatchToProps = (dispatch) => ({
//   setBooks: (books) => dispatch(setBooks(books)),
// });

const actionCreators = {
  setBooks,
};

export default connect(mapStateToProps, actionCreators)(App);

// connect() takes 2 functions
// one function will return state
// another will return methods
