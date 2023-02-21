import './App.css';
import { useState } from 'react';
import { findAllByAltText } from '@testing-library/react';

function App() {

  let [title, setTitle] = useState(['여자 코트 추천','남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [likes, setLikes] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);
  let [userInput, setUserInput] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      {
        title.map(function(a, i){
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitleNum(i);}}>{a}
             <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...likes];
              copy[i]++;
              setLikes(copy);}}> 👍</span>
             {likes[i]}</h4>
              <p>{getTodayDate()} 발행</p>
              <button onClick={()=>{
                let copy=[...title]
                let copy2=[...likes]
                copy.splice(i,1)
                copy2.splice(i,1)
                setTitle(copy)
                setLikes(copy2)
              }}>삭제</button>
           </div>
          )

        })
      }

      <input onChange={(e)=>{
        setUserInput(e.target.value)
      }}/>
      
      <button onClick={()=>{
          let copy=[...title];
          let copy2=[...likes];
          copy.unshift(userInput);
          copy2.unshift(0);
          setTitle(copy);
          setLikes(copy2);
        }}>발행</button>

      {
        modal == true ? <Modal title={title} n={titleNum}/> : null
      }

    </div>
  
  );
}

function Modal(props) {
  return(
    <div className='modal'>
        <h4>{props.title[props.n]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

function getTodayDate() {
  const today = new Date(); // Mon Dec 20 2021 22:04:03 GMT+0900 (한국 표준시)

  const year = today.getFullYear(); // 2021
  const month = ('0' + (today.getMonth() + 1)).slice(-2); // 12
  const day = ('0' + today.getDate()).slice(-2); // 20

  // 원하는 문자열 형태로 날짜 가공하기
  // const dateString = year + month + day; // 20211220
  const dateString = year + '-' + month + '-' + day; // 2021.12.20

  return dateString;
}
export default App;
