import React, {useState} from 'react';




function TodoForm(props) {
    const [input, setInput] = useState('');
  

  const handleChange =(e) =>{
      setInput(e.target.value)
  }
 
   const handleSubmit = (e)=> {
     e.preventDefault();
     
     props.onSubmit({
     id: Math.floor(Math.random()*10000),
     text : input
     })
     
     
     setInput('');
     
   }

    return (
      <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={input} />
          <button>add movie</button>
      </form>
    )
  }
  

export default TodoForm;