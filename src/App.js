import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let post = '비의도적 연애담'
  // let [제목1, b1] = useState('비의도적 연애담');
  // let [제목2, b2] = useState('올드 패션 컵케이크');
  // let [제목3, b3] = useState('은혼');
  let [제목들, b] = useState(['비의도적 연애담', '올드 패션 컵케이크', '은혼']);
  let [like, likeAdd] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{fontSize:'16px'}}>힐링</h4>
      </div>
      <div className='list'>
        <h4>{제목들[0]}<span onClick={() => {likeAdd(like + 1)}}> ✨</span>{like}</h4>
        <p>2023년 03월 17일</p>
      </div>
      <div className='list'>
        <h4>{제목들[1]}</h4>
        <p>2022년 06월 13일</p>
      </div>
      <div className='list'>
        <h4>{제목들[2]}</h4>
        <p>2006년 04월 04일</p>
      </div>
    </div>
  );
}

export default App;
