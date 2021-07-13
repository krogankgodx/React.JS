import React from "react";
import './App.css';
function Message(props){
    return <p>Message -{props.text}</p>

}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first react app
          <h3>Hello,{props.name} !!</h3>
          <Message className="Message" text={"hello world"} />
      </header>
    </div>
  );
}

export default App;
