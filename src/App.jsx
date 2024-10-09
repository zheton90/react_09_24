
import { Form } from './components/Form/Form';

import { Form as FormClass } from "./class-components/Form"
import { Count } from './components/Count';
import { Count as CountClass } from './class-components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

import './index.css';

export const App = () => {

  const [name, setName] = useState('zhen')
  const [count, setCount] = useState(0)
  const arr= ['ivanov', 'petrov', 'sidorov']

  const handelChangeName = (ev) => {
    setName(ev.target.value)
  }

  return < div className='App'>
      
      <h2 style={{background: 'green'}}>Class components</h2>
      <CountClass count={10}/>
      <hr/>
      <FormClass />

      <h2>Function components</h2>
      
      <Form/>
      <Count />
      <hr/>
      <h3>Parent component</h3>
      <p>Count {count}</p>
      <input onChange={handelChangeName}/>
      <h3>Child component</h3>
      <Child name = {name} handelChangeCount = {setCount}/>
      {arr.map((item, idx) => <div key={idx}> {item}</div>)}
    </div>
}

