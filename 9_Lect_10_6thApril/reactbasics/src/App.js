import logo from './logo.svg';
import './App.css';

function Form(props) {
  return (
    <div>
      <input type="text" placeholder={props.text} />
      <button>{props.btn}</button>
    </div>
  );
}

const fruits = [
  { id: 1, name: 'mango' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'banana' },
  { id: 4, name: 'orange' },
  { id: 5, name: 'strawberry' }
];

function Fruit(){
  return(
    <>
      {fruits.map((fruit, index) => {
        return(<>
          <div key={fruit.id}>
            <p className={`${index % 2 == 0 ? 'odd' : 'even'}`}>{fruit.name}</p>
          </div>
        </>)
      })}
    </>
  )
}

function App() {

  const isAdmin = false;
  return (
    <>
    {isAdmin ? <h1>Welcome Admin</h1> :<h1>Welcome User</h1>}
    <Form text="Enter your name" btn="submit" />
    <Form text="Enter your Age" btn="submit" />
    <Form text="Enter Phone No" btn="Call Now" />
    <Form text="Enter your Email" btn="submit" />

    <h2>List of Fruits</h2>
    
    <Fruit />
    
    
    </>
  );
}

export default App;
