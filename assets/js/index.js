const cryptoDrop = document.querySelector("#dropdown");
const fiatDrop = document.querySelector("#dropdown2");
const cryptoInput = document.querySelector("#cryptoInput");
const cryptoOutput = document.querySelector("#cryptoOutput");
const form = document.querySelector("form");

const getValue = async () => {
  const crypto = cryptoDrop.value;
  const fiat = fiatDrop.value;
  const req = fetch(`https://www.cryptonator.com/api/ticker/${crypto}-${fiat}`);
  const res = await req;
  const currencyObj = await res.json();
  const currencyPrice = currencyObj.ticker.price;
  cryptoOutput.value = (cryptoInput.value * currencyPrice).toFixed(2);
};

form.addEventListener("submit", e => {
  e.preventDefault();
  getValue();
});
