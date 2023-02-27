import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';



function App() {
  const [post, setPost] = useState([
    {
      title: '강남 우동 맛집',
      date: '2023-01-01',
      detail: '강남 우동 맛집 정보 공유합니다.',
      likes: 0
    },
    {
      title: '여자 코트 추천',
      date: '2023-01-01',
      detail: '여자 코트 추천합니다.',
      likes: 0
    },
    {
      title: '남자 코트 추천',
      date: '2023-01-01',
      detail: '남자 코트 추천합니다.',
      likes: 0
    }

  ])

  const [inputTitle, setInputTitle] = useState('')
  const [inputDetail, setInputDetail] = useState('')
  const [modal, setModal] = useState(false)
  const [titleNum, setTitleNum] = useState(0);


  return (
    <div>
      <div className='nav'>
        <h4>Blog</h4>
      </div>
      <div>
        <p />.<p />.<p />

        <input onChange={(e) => { setInputTitle(e.target.value) }} placeholder='글 제목을 입력하세요.' required /><p />
        <input onChange={(e) => { setInputDetail(e.target.value) }} placeholder='글 내용을 입력하세요.' required /><p />
        <button onClick={() => {
          if (inputTitle && inputDetail) {
            let copy = [...post];
            copy.unshift(new postInput(inputTitle, todayDate(), inputDetail));
            setPost(copy)
            setInputTitle("")
            setInputDetail("")
          }
          else {
            alert("제목이나 내용이 입력되지 않았습니다.")
          }

        }}>글발행</button>

      </div>

      {
        post.map(function (post1, i) {
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(true); setTitleNum(i); }}>{post1.title}</h4>
              <span onClick={() => {
                let copy = [...post];
                copy[i].likes += 1;
                setPost(copy);
              }}>👍</span>
              <span>{post1.likes}</span>
              <p>{post1.date} 발행</p>
            </div>
          )
        })
      }


      {modal && <Modal2 post={post} n={titleNum} setPost={setPost} />}

    </div>


  );
}

function postInput(title, date, detail) {
  this.title = title;
  this.date = date;
  this.detail = detail;
  this.likes = 0;
}

function todayDate() {
  const today = new Date(); // Mon Dec 20 2021 22:04:03 GMT+0900 (한국 표준시)

  const year = today.getFullYear(); // 2021
  const month = ('0' + (today.getMonth() + 1)).slice(-2); // 12
  const day = ('0' + today.getDate()).slice(-2); // 20

  // 원하는 문자열 형태로 날짜 가공하기
  // const dateString = year + month + day; // 20211220
  const dateString = year + '-' + month + '-' + day; // 2021.12.20

  return dateString;
}

function Modal2(props) {
  return (
    <div className='modal'>
      <h4>{props.post[props.n].title}</h4>
      <button onClick={() => {
        let copy = [...props.post]
        copy.splice(props.n, 1)
        props.setPost(copy)
      }}>글 삭제</button>
      <p>{props.post[props.n].date}</p>
      <p>{props.post[props.n].detail}</p>
    </div>
  )
}


export default App;
