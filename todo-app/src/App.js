import React, { useState } from "react";
import Box from "./Box";
import "./App.css";

const App = () => {
  const [dragId, setDragId] = useState();
  const [todo, setTodo] = useState('')
  const [boxes, setBoxes] = useState([
    {
      id: "Box-1",
      color: "rgb(142, 215, 255)",
      order: 1,
      todo: "강아지 산책시키기"
    },
    {
      id: "Box-2",
      color: "rgb(142, 215, 255)",
      order: 2,
      todo: "밥짓기"
    },
    {
      id: "Box-3",
      color: "rgb(142, 215, 255)",
      order: 3,
      todo: "설거지하기"
    }
  ]);

  const onChange = (ev) => setTodo(ev.target.value)


  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (todo === 0) {
      return;
    }  
    setTodo("")
  }
  const [options, setOptions] = useState("0");
  const optionChange = (ev) => {
    setOptions(ev.target.value)
   
  }

  return (  
    <div className="App">
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="할일을 입력해봐" type="text"/>
        <button onClick={()=>{
          let copy = [...boxes];
          let cnt = copy.length + 1;
          copy.push({
            id: "Box-" + {cnt} ,
            color: "rgb(142, 215, 255)",
            order: cnt,
            todo: todo
          })
          setBoxes(copy);
        }}>입력</button>
      </form>
      
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            key={box.id}
            boxColor={box.color}
            boxNumber={box.id}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            todo={box.todo}
          />
        ))}

        <select onChange={optionChange}>
          <option value="0">선택하세요</option>
          <option value="1">첫번째 옵션</option>
          <option value="2">두번째 옵션</option>
        </select>
        {options === "1" ? <h4> 첫번째 옵션입니다 </h4> : null}
        {options === "2" ? <h4> 두번째 옵션입니다 </h4> : null}
    </div>
  );
};

export default App;
