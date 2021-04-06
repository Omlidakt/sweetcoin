document.getElementById('flexMarketGrid').addEventListener('click', (event) =>
{
    if (event.target.closest('coin-card'))
    {
        document.getElementById('flexMarketGrid').style.display = "none";
        document.getElementById('paginationControls').style.display = "none";
        document.getElementById('flexCoinDetailedInformation').style.display = "flex";
    };
}, false);

let currentPage = 1;

document.querySelectorAll('.paginationButton').forEach(item => {
  item.addEventListener('click', event => {

    if(event.target.id === "paginateForwards")
    {
        currentPage++;
        populateMarketList(currentPage);
    }
    
    if(event.target.id === "paginateBackwards")
    {
        if(currentPage > 1)
        {
            currentPage--;
            populateMarketList(currentPage);
        }
    }
    document.querySelector('#currentPage').innerHTML = currentPage;
  })
})