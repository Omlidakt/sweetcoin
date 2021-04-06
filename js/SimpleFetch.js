class SimpleFetch
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    setBaseURL(baseURL)
    {
        baseURL = this.baseURL;
    }
    async useEndpoint(endpoint, query)
    {
        let dataStore = null; 
          document.querySelector('#loadingSymbol').innerHTML = `
          <div style="width: 5rem; height: 5rem; 
          position:fixed; top:50%; left:50%; z-index:9999;"role="progressbar" 
          class="spinner tertiary"></div>`;
        await fetch(`${this.baseURL}${endpoint}?${query}`)
        .then((response) => response.json())
        .then((results) => {
          document.querySelector('#loadingSymbol').innerHTML = " ";
          return dataStore = results;
      })
        .catch((error) => {
        console.error('Error:', error);
      });
      return dataStore;
    }

}