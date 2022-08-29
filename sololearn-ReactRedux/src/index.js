import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);
// ----------Class in react------------
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world.</h1>;
//   }
// }

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// -------props----------------

// function Hello(props) {
//   return <p>Hello, {props.name}!</p>;
// }

// const el = <Hello name="David" />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// ------------component using another component---------
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>;
// }

// function App() {
//   return <div>
//     <Hello name="David" />
//     <Hello name="James" />
//     <Hello name="Amy" />
//   </div>;
// }

// const el = <App />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// ------props---------

// function Item(props) {
//   return <div className="item">
//   <b>Name:</b> {props.name} <br />
//   <b>Price:</b> ${props.price}
//   </div>;
// }

// function App() {
//   return <div>
//     <Item name="Cheese" price="4.99" />
//     <Item name="Bread" price="1.5" />
//     <Item name="Ice cream" price="24" />
//   </div>;
// }

// const el = <App />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// ------State in react-------------
// class Hello extends React.Component {
//   state = {
//     name: "James"
//   }
//   render() {
//     return <h1>Hello {this.state.name}.</h1>;    
//   }
// }

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );
// // -------A counter button using class component
// class counter extends React.Component{
// state = {
//   Counter : 0
// }
// increment = () => {
//   this.setState(
//     {
//       Counter: this.state.Counter + 1
//     }
//   );
// }
// render(){
//   return <div>
//     <p>{this.state.Counter}</p>
//     <button onClick={this.increment}> Increment</button>
//   </div>;
// }
// }

// ----- hooks Example a counter button --------------
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }

//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>
//     Increment
//   </button>
//   </div>;
// }

// -------- The Life cycle Method ------
// ComponentDidMount(){
//   this.setState({contacts:42});
// }
// ComponentDidmount()
// ComponentWillUnmount()
// ComponentDidUpdate()
// example
// let x = 0;
// class Test extends React.Component {
//   componentDidMount() {
//     x+=3;
//   }
//   render() {
//     return null;
//   }
// }
// -------------The useEffect Hooks--------- 
//-------------Example-----------
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("Number of clicks: " + counter);
//   });

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }
// useEffect(() => {
//   // do something
  
//   return () => {
//     // cleanup
//   }; 
// });
// -----Handling Events IN React-------

/* <button onClick={handleClick}>ClickME</button> */
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }

// ----------Handling User input--------------
// function Converter() {
//   const [km, setKm] = useState(0);

//   function handleChange(e) {
//     setKm(e.target.value);
//   }
//   function convert(km) {
//     return (km/1.609).toFixed(2);
//   }

//   return <div>
//   <input type="text" value={km}
//      onChange={handleChange} />
//   <p> {km} km is {convert(km)} miles </p>
//   </div>;
// }

//-----Forms---- The Example is a controlled Component -------
// function AddForm() {
//   const [sum, setSum] = useState(0);
//   const [num, setNum] = useState(0);

//   function handleChange(e) {
//     setNum(e.target.value);
//   }

//   function handleSubmit(e) {
//     setSum(sum + Number(num));
//     e.preventDefault();
//   }

//   return <form onSubmit={handleSubmit}>
//   <input type="number" value={num} onChange={handleChange} />
//   <input type="submit" value="Add" />
//   <p> Sum is {sum} </p>
//   </form>;
// }
// -- Rendering A list in React------------
// const arr = ["Yidne", "AA", "wolkite"];
// <Mylist data = {arr} />
// // the componet logic
// function Mylist(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//   <li key ={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>
// }