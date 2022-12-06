import './App.css';
import image from './myphoto.jpg'
import React from 'react'
import Profile from './Profile/Profile'
function App() {
  const fullName="Ala Ben Ammar" 
  const prof="Software Engineer"
  const bio="Student in GoMyCode" 
  const hName=`Welcome ${fullName} `
  const object ={color : "yellow"}
  return (
    <div className="App-header">
      <Profile  fullName={fullName} prof={prof} bio={bio} hName={hName} style={object} >
        <img src={image} alt ={"img"}/>
      </Profile>
    </div>
  );
}

export default App;
