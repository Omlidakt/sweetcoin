let fetchFromCoinGecko = new SimpleFetch('https://api.coingecko.com/api/v3/');

async function populateMarketList(page) {
   let coinMarketStore = [];

const priceInEUR = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

   let resultsFromCoinGecko =  await fetchFromCoinGecko.useEndpoint('coins/markets', `vs_currency=EUR&order=market_cap_desc&per_page=10&page=${page}`);
    resultsFromCoinGecko.forEach((market) => {
             coinMarketStore.push(`<coin-card id=${market.id} onclick="populateCoinDetailedInformation('${market.id}')">
                    <h2 slot="coinName" style="background-image:url(${market.image}); background-size:contain; background-repeat: no-repeat; background-position:right">${market.name}<small slot="symbol">${market.symbol.toUpperCase()}</small></h3>
                    <h2 slot="currentPrice">${priceInEUR.format(market.current_price)}</h3>
                    <h3 slot="high24H">${priceInEUR.format(market.high_24h)}</h2>
                    <h3 slot="low24H">${priceInEUR.format(market.low_24h)}</h2>
                </coin-card>`);
    });
    document.getElementById('flexMarketGrid').innerHTML = coinMarketStore.join('');

    document.getElementById('flexMarketGrid').addEventListener('click', (event) =>
    {
        if (event.target.closest('coin-card'))
        {
            document.getElementById('flexMarketGrid').style.display = "none";
            document.getElementById('flexCoinDetailedInformation').style.display = "flex";
        };
    }, false);



}