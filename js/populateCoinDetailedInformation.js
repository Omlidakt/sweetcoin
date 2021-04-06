async function populateCoinDetailedInformation(id) {

const priceInEUR = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

let resultsFromCoinGecko =  await fetchFromCoinGecko.useEndpoint(`coins/${id}/`, ``);
  document.getElementById('coinInformationInsertionPoint').innerHTML = `
  <section style="background-image:url(${resultsFromCoinGecko.image.large}); background-size:contain; background-repeat: no-repeat; background-position:right; margin: inherit"> 
    <h3><a href="${resultsFromCoinGecko.links.homepage[0]}">${resultsFromCoinGecko.name}</a>
      <small>
        ${resultsFromCoinGecko.symbol.toString().toUpperCase()}
      </small>
      <small>
        Hashing Algoritm: ${resultsFromCoinGecko.hashing_algorithm === null ? 'No hashing algorithm found' 
                                                                  : resultsFromCoinGecko.hashing_algorithm}
      </small>
      <small>
        Genesis Date: ${resultsFromCoinGecko.genesis_date === null ? 'No gensis date found' 
                                                                     : resultsFromCoinGecko.genesis_date}
      </small>
      <small>
        Market Capitalisation: ${priceInEUR.format(resultsFromCoinGecko.market_data.market_cap.eur)}
      </small>
    </h3>
  </section>
  <section>
      <h3>Description</h3>
        <p>${resultsFromCoinGecko.description.en}</p>
  </section>`;

}