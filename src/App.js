import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import covidImg from "./images/covid.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const dataFetched = await fetchData();

    this.setState({ data: dataFetched });
  }

  handleCountryChange = async (country) => {
    const dataFetched = await fetchData(country);

    this.setState({ country: country, data: dataFetched });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImg} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
