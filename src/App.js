import React, { Component ,useState} from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import image from './myphoto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends Component {
  constructor(props) {
    super(props);
this.state={
  Visible:true,
  fullName:"Ala Ben Ammar" ,
  prof:"Software Engineer",
  bio:"Student in GoMyCode",
  Status:"Hide",
  count:0
}

  }
ShowHide = () => {
  this.state.Status == "Hide" ? this.setState({Status:'Show',Visible:false}) : this.setState({Status:'Hide',Visible:true,count:0})
}
componentDidMount(){
  setInterval (()=>{
this.setState({count:(this.state.count +1)})},1000);}
  
  render() {
    return (
      <div className="App-header">
                <Button variant="primary" onClick={this.ShowHide} >{this.state.Status} </Button>

        {this.state.Visible?<><div>counter: {this.state.count}</div><div>{this.state.fullName}</div><div>{this.state.bio}</div><div>{this.state.prof}</div><img src={image}></img></>:<p></p>}
      </div>
    );
  }
}


;

export default App;

/*import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';     
import image from './myphoto.jpg'
import React from 'react'
import Profile from './Profile/Profile'
function App() {
  const fullName="Ala Ben Ammar" 
  const prof="Software Engineer"
  const bio="Student in GoMyCode" 
  const hName=`Welcome ${fullName} `
  const object ={color : "black"}
  const hide = () =>{Profile.remove()
console.log("hello")}
  return (
    <div className="App-header">
      <Button variant="primary" onClick={hide}>Show</Button>
      <Profile  fullName={fullName} prof={prof} bio={bio}  style={object} >
        <img src={image} alt ={"img"}/>
      </Profile>
    </div>
  );
}

export default App;*/
