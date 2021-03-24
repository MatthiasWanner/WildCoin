//----------------------------------------------------

// GRAPH ---------------------------------------------------

///  Appel API et répartition des données ///

let currency = "EUR";
let selectCurrency = document.getElementById("select-currency");

let symbol = "€";
let coin = "BTC";







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

const btcData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
    
    prices
  };
};

const ltcData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
    
    prices
  };
};

const cosmosData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
    
    prices
  };
};

const ethereumData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
    
    prices
  };
};

const xrpData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XRP&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
   
    prices
  };
};

const bnbData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  return {
    
    prices
  };
};



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



