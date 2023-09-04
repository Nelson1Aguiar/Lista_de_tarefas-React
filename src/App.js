import React,{useState} from 'react';
import './App.css';

function App() {
    const enter=13
    const esc=27
    const [value,setValue]=useState('')
    const onChange=(event)=>{
        setValue(event.target.value);
    }
    const apagar=()=>{
        setValue("")
    }
    const onKeyDown=(event)=>{
        if(event.which===enter){
            console.log(value)
        }
        else if(event.which===esc){
            apagar()
        }
    }


  return(
  <section id='app' className='container'>
    <header>
        <h1 className='title'>todo</h1>
    </header>
    <section className='main'>
        <input className='new-todo' placeholder='Digite sua tarefa...'
         value={value}onChange={onChange} onKeyDown={onKeyDown}/>
    </section>
  </section>
  )
}

export default App;
