import { useState,useEffect,useRef } from "react";

const TodoForm=(props)=>{
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
});

const handleChange = e => {
  setInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });
  setInput('');
};
const addingBook=()=>{
  return(
    <div>
    <form>
      <input typ="text"  name="text"> </input>
      
      <input typ="text"  name="text"> </input>


    </form>
    </div>
  )
}

return (
  <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <div>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
         ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'> Update</button>
      </div>
    ) : (
      <div>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'> Add todo</button>
      </div>
    )}
    <div>  <button onClick="addingBook" className='todo-button2'> ADDBOOK</button> </div>
  </form>
);

}
export default TodoForm;