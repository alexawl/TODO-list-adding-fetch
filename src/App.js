import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{ text: 'milk', isDone: false }, { text: 'bread', isDone: true }]);


  const addTodo = text => {
    // take a copy of current todos and add a new todo obj
    const newTodos = [...todos, { text: text, isDone: false }];
    // update state of todos
    setTodos(newTodos);
  }


  const markDone = (index) => {
    // takes a copy of current todos 
    const newTodos = [...todos];
    // change the value of a specific todo obj based on its Index
    newTodos[index].isDone = true;
    // update state
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((item, index) => (
          item.isDone ? <li style={{ textDecoration: "line-through" }} key={index}>{item.text} <button onClick={() => markDone(index)}>undo</button></li> :
            <li key={index}>{item.text} <button onClick={() => markDone(index)}>done</button></li>
        ))}
      </ul>
    </div>
  );
}
// props can be also be destructured like this => todoform({propName})
function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo) {
      alert('empty todo');
      // breaks this operation
      return;
    }
    // adds new todo with the fn passed with props
    props.addTodo(newTodo);
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
    </form>
  )
}

export default App;
