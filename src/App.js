import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Header from './components/Header';
import Question from './components/Question';
import data from './helpers/data';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />

    {data.map((item,i)=> {
      return(
        <div key={i}>
      <Question {...item}/>
        </div>
      )
    })}
    </div>
  )
}

export default App
