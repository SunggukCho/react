import React, { useEffect, useState } from 'react';

export default function Counter(){
  const [seconds, setSeconds] = useState(0);
  useEffect(()=> {
    setTimeout(() => {
      setSeconds(v => v+1)
    }, 1000);
  })
  return (
    <div>
      <h1>안녕하세요</h1>
      <h3>지금까지 {seconds}초가 지났습니다.</h3>
    </div>
  )
}