import React from 'react';
  import { useState } from 'react';

import './App.css';


const App = () => {

  const [foodTitle,setFoodTitle] = useState('');
  const [foodList,setFoodList] = useState([]);

  function changeFoodTitle (e) {
      setFoodTitle(e.target.value) 
  }

  function addFoodList (e) {
    e.preventDefault()
     setFoodList([foodTitle,...foodList])
     setFoodTitle('')
     
  } 

  function deleteHandeler(index) {
         const newFoodList = [...foodList]
         newFoodList.splice(index,1)
         setFoodList(newFoodList)
  }
  return (
    <div className='halthy-food'>
       <h1> <span> Helthy</span> Food App</h1>

       <input type="text" onChange={changeFoodTitle} value={foodTitle} placeholder='Enter your food name here...'/>
       <button className='input-btn' onClick={addFoodList}> Add</button>
       <ul className='list-items'>
         {foodList.map((food,index) => (
          <li key={index}>
            <div>
            {food}
            </div>
           
            <div className='btn-food'>
            <button className='btn-one'>Buy</button>
            <button className='btn-two' onClick={() =>deleteHandeler(index)} >
              Delete
              </button>
            </div>
            
            </li>
         ))}
       </ul>
    </div>
  
  );
};

export default App;

