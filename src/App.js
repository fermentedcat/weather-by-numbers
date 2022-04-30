import { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/api';
import { Form } from './components/Form/Form';

function App() {
  const [error, setError] = useState({})
  const [weatherData, setWeatherData] = useState({})

  async function getWeatherData({longitude, latitude}) {
    try {
      const data = await fetchWeather(longitude, latitude)
      setError({})
      setWeatherData(data)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div>
      <p>hallo</p>
      <Form onSubmit={getWeatherData}/>
      {weatherData && <p>{weatherData.referenceTime}</p>}
      {error.message && <p>{error.message}</p>}
    </div>
  );
}

export default App;