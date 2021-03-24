//----------------------------------------------------

// GRAPH ---------------------------------------------------

///  Appel API et répartition des données ///







selectCurrency.addEventListener("change", function (e) {
  if (selectCurrency.value === "EUR") {
    currency = "EUR";
    symbol = "€";
    updateEthereumPrice();
    updateCosmosPrice();
    updateBitcoinPrice();
    updateLtcPrice();
    updateXrpPrice();
    updateBnbPrice();
    

   
  } else if (selectCurrency.value === "USD") {
    currency = "USD";
    symbol = "$";
    updateEthereumPrice();
    updateCosmosPrice();
    updateBitcoinPrice();
    updateLtcPrice();
    updateXrpPrice();
    updateBnbPrice();
    
  
  } else if (selectCurrency.value === "JPY") {
    currency = "JPY";
    symbol = "JPY";
    updateEthereumPrice();
    updateCosmosPrice();
    updateBitcoinPrice();
    updateLtcPrice();
    updateXrpPrice();
    updateBnbPrice();
   
  }
});




/// ERREUR ///
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



async function updateEthereumPrice() {
  let { times, prices } = await ethereumData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("ethPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateXrpPrice() {
  let { times, prices } = await xrpData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("xrpPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateCosmosPrice() {
  let { times, prices } = await cosmosData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("btcPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateLtcPrice() {
  let { times, prices } = await ltcData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("ltcPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateBnbPrice() {
  let { times, prices } = await bnbData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("bnbPrice").innerHTML = `${symbol}` + currentPrice;
}

async function updateMyPrice() {
  let { times, prices } = await myData();
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("myPrice").innerHTML = `${symbol}` + currentPrice;
}

updateEthereumPrice();
updateCosmosPrice();
updateBitcoinPrice();
updateLtcPrice();
updateXrpPrice();
updateBnbPrice();



