import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDOlist() {
  let uuid = uuidv4();

  const [input, setinput] = useState(" ");

  const [todoList, settodoList] = useState([
    {
      id: 1,
      task: "Meditate",
    },

    {
      id: 2,
      task: "Walking",
    },
  ]);

  const handleinput = (e) => {
    setinput(e.target.value);
  };

  const handlesubmit = () => {
    settodoList([...todoList, { id: uuid, task: input }]);
  };

  const handledelete = (deleteid) => {
    const deletedtask = todoList.filter((todo) => todo.id != deleteid);
    settodoList(deletedtask);
  };

    const handleupdate = (i)=>{
        const updatedtask = prompt("Update your task", todoList[i].task)
        const updatedtodolist = [...todoList]

        updatedtodolist[i].task = updatedtask
        settodoList(updatedtodolist)
    }

  return (
    <div>
      <input
        placeholder="add your task"
        type="text"
        onChange={(e) => handleinput(e)}
      />
      <button onClick={handlesubmit}>Add Task</button>

      {todoList.map((todo, i) => (
        <div key={i}>
          <span>{todo.task}</span>
          <button onClick={()=>handleupdate(i)}>Update</button>
          <button onClick={() => handledelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDOlist;
