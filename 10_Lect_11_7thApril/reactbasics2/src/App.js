import {useState} from 'react';
import './App.css';

function Form(props) {
  return (
    <div>
      <input type="text" placeholder={props.text} />
      <button>{props.btn}</button>
    </div>
  );
}

function App() {
  let [count, setCount] = useState(0);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const incrementCount = () =>
    setCount(count += 1)

  const decrementCount = () =>
    setCount(count -+ 1);


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>

      <input type='text' name='name' onChange={e=>setName(e.target.value)} />
      <p>Hey {name} welcome to our website</p>
      <input type='number' name='age' onChange={e=>setAge(e.target.value)} />
      <p>You are {age} years old</p>
      <input type='email' name='email' onChange={e=>setEmail(e.target.value)} />
      <p>Your registered email address is {email}</p>
      <input type='number' name='number' onChange={e=>setPhone(e.target.value)} />
      <p>Your registered email address is {phone}</p>
    </>
  );
}

export default App;
