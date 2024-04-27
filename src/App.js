import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import './App.css';

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const App = () => {
  const [data, setData] = useState({});

  const fetchWeather = () => {
    const cityTextBox = document.getElementById('cityTextBox').value;
    const apiID = '96f113262a8d460e2451c4f319c203fb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTextBox}&appid=${apiID}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <div className='bg-gray-900'>
      <Header fetchWeather={fetchWeather} />
      <Body data={data} weekDays={weekDays} month={month} />
    </div>
  );
};

export default App;
