import React, { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { todosState, sortedTodosState } from './recoil/todo';

export default function Todos() {
  const inputRef = useRef(null);

  const [todos, setTodos] = useRecoilState(todosState);
  const sortedTodos = useRecoilValue(sortedTodosState);

  const addTodo = () => {
    const newTodo = {
      completed: false,
      description: inputRef.current.value,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <section>
      <header>
        <h1>Todos list</h1>
      </header>
      <main>
        <div>
          <div>
            <input type="text" name="todo" ref={inputRef} />
          </div>
          <button type="button" onClick={addTodo}>
            Add todo
          </button>
        </div>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.description}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {sortedTodos.map((todo, index) => (
              <li key={index}>{todo.description}</li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
