import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "46bda61f9938f1047b9521b2317961e7";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.element.name.city.value;
    const country = e.target.element.name.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Boston, us&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeahter={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
