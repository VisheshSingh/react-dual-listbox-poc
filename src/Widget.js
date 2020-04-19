import React, { useState, memo } from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';

const Widget = (props) => {
  const { getSelected, items } = props;

  // selected array are the items in the right box
  const [selected, setSelected] = useState([]);

  const onChange = (newSelected) => {
    if (newSelected.join('') === selected.join('')) return; // nothing to do

    setSelected(newSelected);
    console.log({ items });

    const updatedItems = items.filter((item) =>
      newSelected.includes(item.value)
    );

    // const updatedItems = items.filter(
    //   (item, i) => item.value === newSelected[i]
    // );

    console.log('onChange', { newSelected, updatedItems });
    getSelected(updatedItems);
  };

  console.log({ items, selected });
  return (
    <DualListBox options={items} selected={selected} onChange={onChange} />
  );
};

export default memo(Widget);
