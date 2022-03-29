import axios from 'axios'
import React, { useEffect, useState } from "react";

function Country({input, countries}){
  let country = countries.find(country => country.name.common.includes(input))
  return(
    <>
      <h2>{country.name.common}</h2>
      <p><b>capital</b> {country.capital}</p>
      <p><b>area</b> {country.area}</p>
      <img style={{maxWidth: "30vw"}} src={country.flags.svg} alt = "flag"/>
      {/* {
        country.languages.map(language => <p>{language}</p>)
      } */}
    </>
  )
}
function ShowCountry({countries, filteredCountryName}){
  let country = countries.find(country => country.name.common.includes(filteredCountryName))
  return(
    <>
      <h2>{country.name.common}</h2>
      <p><b>capital</b> {country.capital}</p>
      <p><b>area</b> {country.area}</p>
      <img style={{maxWidth: "30vw"}} src={country.flags.svg} alt = "flag"/>
      {/* {
        country.languages.map(language => <p>{language}</p>)
      } */}
    </>
  )
}

function App() {
  const [countriesName, setCountriesName] = useState([]);
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState([]);

  function handleInput(e){
    const inputValue = e.target.value;
    setInput(inputValue);
    let filteredCountryName = countriesName.filter((countryName) => countryName.includes(inputValue))
    inputValue === "" ? setFilter([]) : setFilter(filteredCountryName)
  }

  // function handleShow(filteredCountryName){
  //   return <ShowCountry countries = {countries} filteredCountryName = {filteredCountryName} />
  // }
  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      let fetchedCountries = response.data;
      setCountries(fetchedCountries);
      let countryNameList = fetchedCountries.map(fetchedCountry => fetchedCountry.name.common);
      setCountriesName(countryNameList)
    })
  }, [])

  return (
    <div className="App">
      <form>
        <div>
          find countries Name <input value={input} onChange={handleInput} />

          {
            filter.length === 1 ? <Country input = {input} countries = {countries} /> : 
            filter.map(filteredCountryName => <p key = {filteredCountryName}>{filteredCountryName} </p>)
          }
        </div>
      </form>
    </div>
  );
}

export default App;
