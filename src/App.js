import React from 'react';
import logo from './logo.svg';
import './App.css';
import Warpper from "./Warpper";


function App() {
  return (
    <Wrapper>

    <Photo src="/profile.png" />
  
    <Title style={{
  
      color:"red"
  
  }}>My Name here</Title>
  
    <Title small>My job here</Title>
  
  
  </Wrapper>
  )
}

export default App;
