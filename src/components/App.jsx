import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';

import axios from 'axios';

import MenuComponent from './Menu';
import BookCard from './BookCard';
import Filter from '../containers/Filter';

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then((response) => {
      setBooks(response.data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    console.log(this.props)

    return (
      <Container>
        <MenuComponent />
        <Filter />
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

export default App;
