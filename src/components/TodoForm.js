import React, {useState} from 'react';

export default function TodoForm({ addItem }) {
  const [value, setValue] = useState("");
  const handleSubmit = event => {
    event.preventDefault()
    if(!value) return;
    addItem(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
