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
        await fetch(`${this.baseURL}${endpoint}?${query}`)
        .then((response) => response.json())
        .then((results) => {
          return dataStore = results;
      })
        .catch((error) => {
        console.error('Error:', error);
      });
      return dataStore;
    }

}