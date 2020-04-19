import React, { useState, memo } from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';

const Widget = (props) => {
  const { getSelected, items } = props;
  const [selected, setSelected] = useState([]);

  const onChange = (selected) => {
    // if (newSelected.join('') === selected.join('')) return; // nothing to do

    setSelected(selected);
    const updatedItems = items.filter((item) => selected.includes(item.value));

    // const updatedItems = items.filter(
    //   (item, i) => item.value === newSelected[i]
    // );
    getSelected(updatedItems);
  };

  console.log({ items, selected });
  return (
    <DualListBox options={items} selected={selected} onChange={onChange} />
  );
};

export default memo(Widget);
