import React, { useState, useCallback } from 'react';
import Widget from './Widget';

function App() {
  const [items, setItems] = useState([
    {
      value: 'DV',
      label: 'Darth Vader',
    },
    {
      value: 'OWK',
      label: 'Obi-Wan-Kenobi',
    },
    {
      value: 'LS',
      label: 'Luke Skywalker',
    },
  ]);

  const [submittableItems, setSubmittableItems] = useState([]);
  const getSelected = useCallback(
    (newSelected) => {
      setSubmittableItems(newSelected);
    },
    [setSubmittableItems]
  );

  console.log('Submittable Items 😎', submittableItems);
  return (
    <div className='App'>
      <h1>React Dual listbox</h1>
      <Widget items={items} getSelected={getSelected} />
    </div>
  );
}
App.whyDidYouRender = true;

export default App;
