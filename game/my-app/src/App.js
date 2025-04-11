import './App.css';
import { useState } from "react";
export default function App(){
  const [nu1, setNu1] = useState(0)
  const [nu2, setNu2] = useState(0)
  let sol = 0
  const [result, setResult] = useState()

  const sum = (event)=>{
    event.preventDefault()
    if(nu1 === '' | nu2 === ''){
      alert('empty space')
    }else{
      sol = parseInt(nu1) + parseInt(nu2)
      setResult(sol)
    }
  }
  const minus = (event)=>{
    event.preventDefault()
    if(nu1 === '' | nu2 === ''){
      alert('empty space')
    }else{
      sol = parseInt(nu1) - parseInt(nu2)
      setResult(sol)   
    }
  }
  const multiply = (event)=>{
    event.preventDefault()
    if(nu1 === '' | nu2 === ''){
      alert('empty space')
    }else{
      sol = parseInt(nu1) * parseInt(nu2)
      setResult(sol)    
    }
  }
  const divide = (event)=>{
    event.preventDefault()
    if(nu1 === '' | nu2 === '' | nu2 === 0){
      alert('empty space or zero')
    }else{
      sol = parseInt(nu1) / parseInt(nu2)
      setResult(sol.toFixed(3)) 
    }
  }
  const calculator = (event) => {
    var cont = 0
   var container = document.getElementById('conteiner') 
    container.innerHTML = ''
    event.preventDefault()
    var container = document.getElementById('conteiner')
    for(let i = 0; i < 10; i++){
      var btnClick = document.createElement('button').style
      btnClick.textContent = i;
      cont ++
      if (cont % 3 & cont > 0){
        <br/>
      }else{

      }
      container.appendChild(btnClick)
    }
  }
  
  return (
    <form  >
      <div className='form'>Calculator</div>
        <div className='div'>
          <label> First number: 
            <input 
              className='margin'
              type="number"
              min={-10000} 
              max={9999999} 
              pattern="\d{7}" 
              title="Número deve conter exatamente 7 dígitos" 
              required
              onChange={(e) => setNu1(e.target.value)}/>
          </label>
          <br/>
          <label>Second number: 
            <input 
              className='margin'
              type="number"
              min={-10000} 
              max={9999999} 
              pattern="\d{7}" 
              title="Número deve conter exatamente 7 dígitos" 
              required
              onChange={(e) => setNu2(e.target.value)}/>
          </label>
          <br/>
          <label className='result'>Result {result}
        </label>
            <br/>
            <label>
              
            </label>
        <button onClick={sum} value='+' className='button'>+</button>
        <button onClick={minus} value='-' className='button'>-</button>
        <button onClick={multiply} value='x' className='button'>x</button>
        <button onClick={divide} value='/' className='button'>/</button>
        <button onBlur={calculator} value={"+-*/"} className='button'></button>
        <div id='conteiner' className='conteiner'></div>
          
      </div>
      </form>
  )

  
}
