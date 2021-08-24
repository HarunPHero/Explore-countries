

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displaycountries(data);
    })
const displaycountries = countries => {
    const countriesDiv = document.getElementById('countries')

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = "country"
        const countryInfo = `
        <h3 class="country-name">Country: ${country.name}</h3>
        <p class="country-cap">Capital: ${country.capital}</p>
        <img class="country-img"src="${country.flag}">
        <h3 class="country-lan">Language: ${country.languages[0].name}</h3>
        <h3 class="country-time">Timezone: ${country.timezones[0]}</h3>
        <h3 class="country-currency">Currency: ${country.currencies[0].name} (${country.currencies[0].code})</h3>
        <button onclick="displaycountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)


    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = "country"
    //     const countryInfo = `
    //     <h3 class="country-name">Country: ${country.name}</h3>
    //     <p class="country-cap">Capital: ${country.capital}</p>
    //     <img class="country-img"src="${country.flag}">
    //     <h3 class="country-lan">Language: ${country.languages[0].name}</h3>
    //     <h3 class="country-time">Timezone: ${country.timezones[0]}</h3>
    //     <h3 class="country-currency">Currency: ${country.currencies[0].name} (${country.currencies[0].code})</h3>
    //     `
    //     countryDiv.innerHTML = countryInfo
    //     countriesDiv.appendChild(countryDiv)
    // }
}
//or
// const h3 = document.createElement('h3');
// h3.innerText = country.name
// const p = document.createElement('p');
// p.innerText = country.capital
// countryDiv.appendChild(h3)
// countryDiv.appendChild(p);
// countriesDiv.appendChild(countryDiv)

const displaycountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))


}
const renderCountryInfo = country => {
    alert('Details are at the top of the website')
    const countriesDiv = document.getElementById('country-detail');
    countriesDiv.innerHTML = `
            <h3 class="country-name">Country: ${country.name}</h3>
        <p class="country-cap">Capital: ${country.capital}</p>
        <img class="country-img"src="${country.flag}">
        <h3 class="country-lan">Language: ${country.languages[0].name}</h3>
        <h3 class="country-time">Timezone: ${country.timezones[0]}</h3>
        <h3 class="country-currency">Currency: ${country.currencies[0].name} (${country.currencies[0].code})</h3>
        <h3>Area: ${country.area}</h3class=>
        <h3>Region: ${country.region}</h3>
        <h3>Cioc: ${country.cioc}</h3>
        <h3>Numeric-Code: ${country.numericCode}</h3>
        `

}

