import React from "react";
import React, { useState, useEffect } from "react";
import './App.css'
import Form from './Form'
import * as yup from 'yup'
import Axios from 'axios'

function App() {
  const [pizzaValues, setPizzaValues] = useState([])
  useEffect(() => {console.log('Order Up!')}, [pizzaValues])

const App = () => {
  return (
    <>
    <div classNam="App">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
      <p>Our Sauce is the Sauciest!</p>

    <Form setPizzaValues={setPizzaValues} pizzaValues={pizzaValues}/>

    </div>

  );
};
export default App;
