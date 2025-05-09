function searchCountry() {
    var searchTerm = document.getElementById("country-input").value.trim();
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showInBrowser(data))
        .catch(error => {
            document.getElementById("displayArea").innerHTML = "<p>Something went wrong or no country found.</p>";
        });
}

function showInBrowser(data) {
    var display = document.getElementById("displayArea");
    display.textContent = "";

    if (!data || data.status === 404) {
        display.innerHTML = "<p>No country found. Try again.</p>";
        return;
    }

    for (var i = 0; i < data.length; i++) {
        var country = data[i];
        var name = country.name.common;
        var capital = country.capital ? country.capital[0] : "N/A";
        var flag = country.flags.svg;
        var population = country.population;
        var region = country.region;
        var subregion = country.subregion;
        var currencyList = Object.values(country.currencies || {}).map(c => c.name).join(", ");

        var newDiv = document.createElement("div");
        newDiv.classList.add("innerStyle");

        newDiv.innerHTML = `
            <h3>${name}</h3>
            <img src="${flag}" alt="Flag of ${name}">
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Region:</strong> ${region}</p>
            <p><strong>Subregion:</strong> ${subregion}</p>
            <p><strong>Population:</strong> ${population.toLocaleString()}</p>
            <p><strong>Currency:</strong> ${currencyList}</p>
        `;

        display.appendChild(newDiv);
    }
}
