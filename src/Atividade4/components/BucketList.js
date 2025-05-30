// BucketList.js
import { useState } from 'react';
import '../Atv04.css';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
];

function Item({ item, onChange }) {
  return (
    <li className="bucket-list-item">
      <label>
        <input
          type="checkbox"
          checked={item.seen}
          onChange={e => {
            onChange({
              ...item,
              seen: e.target.checked
            });
          }}
        />{' '}
        {item.title}
      </label>
    </li>
  );
}

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleMyChange(updatedItem) {
    setMyList(myList.map(item => item.id === updatedItem.id ? updatedItem : item));
  }

  function handleYourChange(updatedItem) {
    setYourList(yourList.map(item => item.id === updatedItem.id ? updatedItem : item));
  }

  return (
    <div className="component-container bucket-list">
      <h2>Art Bucket List</h2>
      <h3>My list of art to see:</h3>
      <ul>
        {myList.map(item => (
          <Item key={item.id} item={item} onChange={handleMyChange} />
        ))}
      </ul>
      <h3>Your list of art to see:</h3>
      <ul>
        {yourList.map(item => (
          <Item key={item.id} item={item} onChange={handleYourChange} />
        ))}
      </ul>
    </div>
  );
}
