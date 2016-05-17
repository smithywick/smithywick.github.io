import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="hello-container">
          <Hello />
        </div>
        <div className="world-container">
          <World />
        </div>
      </div>
    )
  }
}

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

class World extends React.Component{
  render(){
    return <h1>World</h1>
  }
}

export default HelloWorld;
