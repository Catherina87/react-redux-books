import React from 'react';
import { Menu } from 'semantic-ui-react';

function MenuComponent() {
  return (
    <Menu>
      <Menu.Item name="browse">BookShoppe</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="signup">
          Total: &nbsp; $<b>0</b>
        </Menu.Item>

        <Menu.Item name="help">Cart</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default MenuComponent;
