
import React, { useState } from 'react';
import { Header } from './Header';

export function HeaderWithButton(props) {
  const [title, setTitle] = useState('my name is ironman');

  function updateTitle() {
    setTitle('my name is ' + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click here to update the title</button>
      <Header title={title}></Header>
    </div>
  );
}
