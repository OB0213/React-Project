import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [data,setdata]=useState('');
  const [list,setlist]=useState([]);
  const myclick=()=>{
    setlist([...list,data]);
  }
  const filterData=(id)=>{
    console.log(id);
    const updateditems=list.filter((ele,ind)=>
         ind!==id
    )
    setlist(updateditems);
   
  }
  return (
    <div className="App">
      <h2>Enter the to do list item</h2>
      <input type='text' onChange={(e)=>setdata(e.target.value)}></input><br></br>
      <button onClick={myclick}>Click</button>

      <h1>The To do List is</h1>

      {list.map((value,index)=>
      <div className='myclass'>
      <h2> {value}</h2>
      <button className='mybutton' onClick={()=>filterData(index)}>Delete</button>
        </div>
      )}

     
    </div>
  );
}

export default App;
