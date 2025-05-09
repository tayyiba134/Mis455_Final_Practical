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



