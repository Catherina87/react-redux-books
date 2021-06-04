import React from 'react';
import { Menu } from 'semantic-ui-react';

function Filter({ setFilter, filterBy }) {

  return (
    <Menu secondary>
      <Menu.Item 
        active={filterBy === 'all'} 
        onClick={() => setFilter('all')}>
        All
      </Menu.Item>

      <Menu.Item 
        active={filterBy === 'price_high'} 
        onClick={() => setFilter('price_high')}>
        Price (High)
      </Menu.Item>

      <Menu.Item 
        active={filterBy === 'price_low'} 
        onClick={() => setFilter('price_low')}>
        Price (Low)
      </Menu.Item>

      <Menu.Item 
        active={filterBy === 'author'} 
        onClick={() => setFilter('author')}>
        Author
      </Menu.Item>
    </Menu>
  );
}

export default Filter;
