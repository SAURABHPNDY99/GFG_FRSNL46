import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //   .then(response => response.json())
  //   .then(response => setProducts(response.products))
  // }, [count])

  // Using axios
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then(res => setProducts(res.data.products))
  }, [count])

  return (
    <>
      <h1>Fetch API</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count+ 1)}>Add</button>

      {
        products.map(item => 
          <div key={item.id}>
            <div>
              <img src={item.thumbnail} alt="Product Img" />
            </div>

            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
            <div>
              <p>{item.price}</p>
              <p>{item.rating}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
