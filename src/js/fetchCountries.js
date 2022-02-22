 function fetchCountries(name) {
	return	fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,name,capital,flags,population,languages`)
  .then(response => response.json())
  }
  export default {fetchCountries}