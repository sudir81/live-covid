import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changebleURL = url;
  if (country) {
    changebleURL = `${url}/countries/${country}`;
  }

  try {
    /*    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
*/
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changebleURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {}
};

export const fetchByCountry = async (country) => {
  try {
    const response = await axios.get(`${url}/${country}`);
    console.log(response);
  } catch (error) {}
};
