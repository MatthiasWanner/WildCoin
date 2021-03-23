// /* MENU ICONE BURGER */
// let menu = document.getElementById("menuNavigation");
// let menuButton = document.getElementById("burger");

// let burger = document.getElementById("burger");
// let menuIcon = document.getElementById(".menu-icon");

// burger.addEventListener("click", function (e) {
//   burger.classList.toggle("is-opened");
// });

// menuButton.addEventListener("click", function (e) {
//   menu.classList.toggle("menuNavigationDisplay");
//   menu.classList.toggle("menuNavigation");
// });




//-------------------------- APPEL API


//----------------------------------------------------

// GRAPH ---------------------------------------------------

///  Appel API et répartition des données ///

let currency = "EUR";
let selectCurrency = document.getElementById("select-currency");
let selectCrypto = document.getElementById("select-crypto");

let symbol = "€";
let coin = "BTC";

selectCrypto.addEventListener("change", function (e) {
  if (selectCrypto.value === "BTC") {
    coin = "BTC";
    myData();
    updateMyPrice();
    printMyChart();
  } else if (selectCrypto.value === "ETH") {
    coin = "ETH";
    
    myData();
    updateMyPrice();
    printMyChart();
  } else if (selectCrypto.value === "LTC") {
    coin = "LTC";
    myData();
    updateMyPrice();
    printMyChart();
  } else if (selectCrypto.value === "XRP") {
    coin = "XRP";
    myData();
    updateMyPrice();
    printMyChart();
  } else if (selectCrypto.value === "BNB") {
    coin = "BNB";
    myData();
    updateMyPrice();
    printMyChart();
  } else if (selectCrypto.value === "ATOM") {
    coin = "ATOM";
    myData();
    updateMyPrice();
    printMyChart();
  }
});

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
    updateMyPrice();

   
  } else if (selectCurrency.value === "USD") {
    currency = "USD";
    symbol = "$";
    updateEthereumPrice();
    updateCosmosPrice();
    updateBitcoinPrice();
    updateLtcPrice();
    updateXrpPrice();
    updateBnbPrice();
    updateMyPrice();
  
  } else if (selectCurrency.value === "JPY") {
    currency = "JPY";
    symbol = "JPY";
    updateEthereumPrice();
    updateCosmosPrice();
    updateBitcoinPrice();
    updateLtcPrice();
    updateXrpPrice();
    updateBnbPrice();
    updateMyPrice();
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
    times,
    prices,
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
    times,
    prices,
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
    times,
    prices,
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
    times,
    prices,
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
    times,
    prices,
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
    times,
    prices,
  };
};

const myData = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${selectCrypto.value}&tsym=${currency}&limit=119&api_key=6f82a74e514a9ae1119f916469dda27ba1297e53c61c2b1abb88db8174f43bf1`
  );
  const json = await response.json();
  const data = json.Data.Data;
  const times = data.map((obj) => obj.time);
  const prices = data.map((obj) => obj.high);
  let date = new Date(prices * 1000);
  let hours = date.getHours();
  console.log(hours);

  return {
    times,
    prices,
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

/// Charts ///
let createBtcChart;
let createCosmosChart;
let createethereumChart;
let createLtcChart;
let createXrpChart;
let createBnbChart;
let createmyChart;


async function printMyChart() {
  let { times, prices } = await myData();

  let myChart = document.getElementById("myChart").getContext("2d");
  
  let gradient = myChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, "grey");
  gradient.addColorStop(0.425, "white");

  Chart.defaults.global.defaultFontFamily = "Red Hat Text";
  Chart.defaults.global.defaultFontSize = 12;

  createMyChart = new Chart(myChart, {
    
    type: "line",
    data: {
      labels: times,
      datasets: [
        {
          label: symbol,
          data: prices,
          backgroundColor: gradient,
          borderColor: "grey",
          borderJoinStyle: "round",
          borderCapStyle: "round",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: 0.2,
        },
      ],
    },

    options: {
      title: {
        display: true,
        text: coin,
        fontSize: 20,
      },

      legend: {
        display: false,
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },

      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {},
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {},
          },
        ],
      },

      tooltips: {
        callbacks: {
          title: function () {},
        },

        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: "nearest",
        caretSize: 10,
        backgroundColor: "rgba(255,255,255,.9)",
        bodyFontSize: 15,
        bodyFontColor: "#303030",
      },
    },
  });
  
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


updateMyPrice();


printMyChart();












function caroussel(){
  let itemClassName = "carousel__photo";
    items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

// Set classes
function setInitialClasses() {
  // Targets the previous, current, and next items
  // This assumes there are at least three items.
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
}
// Set event listeners
function setEventListeners() {
  let next = document.getElementsByClassName('carousel__button--next')[0],
      prev = document.getElementsByClassName('carousel__button--prev')[0];
  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

// Next navigation handler
function moveNext() {
  console.log('tergvz')
  // Check if moving
  if (!moving) {
    // If it's the last slide, reset to 0, else +1
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}
// Previous navigation handler
function movePrev() {
  // Check if moving
  if (!moving) {
    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }
          
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}


function disableInteraction() {
  // Set 'moving' to true for the same duration as our transition.
  // (0.5s = 500ms)
  
  moving = true;
  // setTimeout runs its function once after the given time
  setTimeout(function(){
    moving = false
  }, 500);
}


function moveCarouselTo(slide) {
  // Check if carousel is moving, if not, allow interaction
  if(!moving) {
    // temporarily disable interactivity
    disableInteraction();
    // Update the "old" adjacent slides with "new" ones
    var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
    // Test if carousel has more than three items
    if ((totalItems - 1) > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)){
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems -1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }
      // Now we've worked out where we are and where we're going, 
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;
      // Add new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}


function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false so that the carousel becomes interactive
  moving = false;
}


// make it rain
initCarousel();




};

caroussel();
