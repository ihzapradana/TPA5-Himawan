import React, { useState } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        todos : state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");
  
    const handleChange = (e) => {
      setTodo(e.target.value);
    };
  
    const add = () => {
      if (todo === "") {
        alert("Input is Empty");
      } else {
        props.addTodo({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          completed: false,
        });
        setTodo("");
      }
    };

    return (
        <div className='addTodos'>
            <input type="text" onChange={(e) => handleChange(e)} className="todo-input" value={todo} />
            <button className="add-btn">Add</button>
        <br />
        <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
        </ul>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);