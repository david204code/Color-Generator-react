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
    // console.log('Thank you Lord Jesus');

    try {
      let colors = new Values(color).all(10);
      setList(colors);

    } catch (error) {
      setError(true);
      console.log(error);
    }

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
            className ={`${error ? 'error' : null}`}
          />
          <button className ="btn" type ="submit">Submit</button>
        </form>
      </section>

      <section className ="colors">
        {/* iterate over the list array of color */}
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key ={index} {...color} index ={index} hexColor ={color.hex}/>
        })}
      </section>
    </>
  );
}

export default App
