import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckboxSharp, IoCheckmarkCircle, IoCheckmarkDone, IoCheckmarkDoneSharp, IoClose, IoTrashBin } from "react-icons/io5";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button  onClick={() => changeFocus()}>
          {" "}
          <AiFillEdit />
        </motion.button>
        {item.completed === false && (
          <motion.button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkCircle />
          </motion.button>
        )}
        <motion.button
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)} >
          {" "}
          <IoTrashBin  />
        </motion.button>

      </div>
      {item.completed && <span className="completed">Done</span>}
       
    </li>
  );
};

export default TodoItem;