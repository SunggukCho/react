import React, { useState } from 'react';
import Counter from './Counter.js';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);
  function onAdd() {
    const todo = {id: currentId, desc}; // input값이 변경될 때 setDesc가 작동해서 desc 상태값이 바뀐다. todo는 currentId와 desc를 받아와 새로운 todoList를 만들준비를 한다.
    setCurrentId(currentId + 1); // currentId에 +1 한 값을 다시 currentId로 바꿔준다.
    setTodoList([...todoList, todo]); // 기존 todoList를 그대로 가져오고 맨 뒤에 todo를 추가해준 새로운 배열을 만든다.
  }
  function onDelete(e) {
    const id = Number(e.target.dataset.id); // targeting하는 id값을 받아와서 id변수에 넣어준다.
    const newTodoList = todoList.filter(todo => todo.id !== id); // 새로운 todoList인 newTodoList를 만들어준다. (id가 다른 것들로만) 
    setTodoList(newTodoList); // 타겟 아이디 빼준 newTodoList를 setTodoList에 넣어 todoList 상태값을 변경시킨다.
  }
  function onSaveToServer() {}

  return (
    <div className="App">
      <h3>할 일 목록</h3>
      <ul>
        {todoList.filter((_, index) => (showOdd ? index%2 === 0: true)).map(todo => (
          <li key={todo.id}>
            <span>
              {todo.desc}
            </span>
            <button data-id={ todo.id } onClick={onDelete}> 삭제 </button>
          </li>
        )) }
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수 On/Off</button>
      <button onClick={onSaveToServer}>서버에 저장</button>
      <br/>
      <Counter />
    </div>
  );
}

export default App;
