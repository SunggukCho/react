import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '공용 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] = '하위 ^^'
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <img src={logo} alt="logo"/>
      <div className="list">
        <h4>{ 글제목[0] } 
          <span onClick={ () => { 따봉변경(따봉 + 1) }}>👍 </span>
          { 따봉 }
        </h4>
        <p>날짜</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>날짜</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>날짜</p>
        <hr/>
      </div>
      <button onClick={ () => { 제목변경() }}>버튼</button>

      <Modal />

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
