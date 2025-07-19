import React from 'react';
import NestedDropdown from './NestedDropdown';

const App = () => {
  const menuItems = [
    { label: 'Item 1', children: [{ label: 'Subitem 1.1' }, { label: 'Subitem 1.2' }] },
    { label: 'Item 2' },
    {
      label: 'Item 3',
      children: [
        { label: 'Subitem 3.1', children: [{ label: 'Subsub 3.1.1' }, { label: 'Subsub 3.1.2' }] },
        { label: 'Subitem 3.2' },
      ],
    },
    { label: 'Item 4' },
  ];

  return (
    <div>
      <h1>Nested Dropdown Example</h1>
      <NestedDropdown items={menuItems} title="Open Menu" />
    </div>
  );
};

export default App;

