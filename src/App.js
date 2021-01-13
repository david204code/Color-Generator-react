import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  // state values
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thank you Lord Jesus');
  }

  return (
    <>
      <section className ="constainer">
        <h3>Color Generator</h3>
        <form onSubmit ={handleSubmit}>
          <input 
            type ="text" 
            value ={color} 
            onChange ={(e) => setColor(e.target.value)}
            placeholder ="#f15025"
          />
          <button className ="btn" type ="submit">Submit</button>
        </form>
      </section>

      <section className ="colors">
        <h4>Literating list</h4>
      </section>
    </>
  );
}

export default App
