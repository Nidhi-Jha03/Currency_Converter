const cur_one=document.getElementById("select-cur-one")
const cur_two=document.getElementById("select-cur-two")
const input=document.getElementById("input")
const result=document.getElementById("result")
const rate=document.getElementById("exchangerate");
const btn=document.getElementById("button");
function calculate() {
    const currency_one = cur_one.value;
    const currency_two = cur_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/451f3f0c45095ff6ab7c0017/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
      const exchange_rate = data.conversion_rates[currency_two];
      rate.innerText = `1 ${currency_one} = ${exchange_rate} ${currency_two}`;
        result.innerText = `${input.value} ${currency_one} =`+ (input.value*exchange_rate).toFixed(2) + `${currency_two}` ;
      });
  }
   btn.addEventListener('click', () => {
    calculate();
  });
  calculate();