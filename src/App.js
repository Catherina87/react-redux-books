import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';

class App extends Component {
  render() {
    const { books } = this.props.books;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 0,
        title: 'Three Comrades ' + new Date(),
      },
    ];

    return (
      <div>
        <h1>{books[0].title}</h1>
        <button onClick={() => setBooks(newBooks)}>SET BOOK</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
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
