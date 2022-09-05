import logo from './logo.svg';
import './App.css';
import Interview from './Interview'
import React from 'react';

function App() {
  const newElem = React.createElement('div', null, "Inside element")
  const newElement = React.createElement('div', null, [newElem, "Hey I am in the array"])
  // 3 parameter is children


  return (
    <h1>This is h1 tag</h1>
  );
}

export default App;




// function App() {
//   const newElement = React.createElement('div', null, "Hey you have created an element")
//   return (
//     newElement
//   );
// }

// export default App;









// function App() {
//   const newElem = React.createElement('div', null, "Inside element")
//   const newElement = React.createElement('div', null, [newElem, "Hey I am in the array"])
//   // 3 parameter is children


//   return (
//     newElement
//   );
// }
