import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { setBooks } from './actions/books';
import axios from 'axios';

import MenuComponent from './components/Menu';
import BookCard from './components/BookCard'

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
      <Container>
        <MenuComponent />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading...'
            : books.map((book, index) => (
                <BookCard key={index} {...book} />
              ))}
        </Card.Group>
      </Container>
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
