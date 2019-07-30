import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
//import './App.css';
//import {Homepage} from './JS/Homepage.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//       <Homepage/>
//     )
//   }
// }

// export default App;

function app (){
  return(
  <div>
    <h1>Satwik</h1>
    <p>  i was born in AP.I like to travel.I have already covered part of India. Some of the locations were: </p>
    <ul>
      <li>Andhra</li>
      <li>Karnataka</li>
      <li>Kerala</li>
      <li>TamilNadu</li>
      <li>Delhi</li>
      <li>Uttarakhand</li>
    </ul>
  </div>
  )
}

ReactDOM.render(<app />,document.getElementById("rooot"))