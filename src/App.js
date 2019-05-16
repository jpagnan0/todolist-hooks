import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [items, setItem] = useState([])

  const addItem = text => {
    const newItems = [...items, { text,  isCompleted: false }];
    setItem(newItems);
  };

  const completeItem = idx => {
    const newItems = [...items];
    newItems[idx].isCompleted === false ? newItems[idx].isCompleted=true : newItems[idx].isCompleted=false;
    setItem(newItems);

  }

  const countCompleteItems = () => {
    const allItems = [...items];
    let total = allItems.length;

    let complete = allItems.filter(el => el.isCompleted )
    let remaining = complete.length;
    // let totalItemsLength = totalItems.length;
    // console.log(complete)
    // console.log(`${remaining} of ${total}`)
    return `${remaining} of ${total}`
  }
  return (
    <div className="App">
      <TodoForm addItem={addItem}/>
      <p>{countCompleteItems()}</p>
      <ul className="todo-list">
        {items.map((item, i) => (
          <Todo
            key={i}
            idx={i}
            item={item}
            completeItem={completeItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
