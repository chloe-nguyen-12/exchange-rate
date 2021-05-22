//step1.1 : select các element
const currencyEl_one = document.querySelector("#currency-one");
const amountEl_one = document.querySelector("#amount-one");
const currencyEl_two = document.querySelector("#currency-two");
const amountEl_two = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");
//Step 1.2:

//Step 2:Fetch exchange rates and update the Dom
function calculate() {
  const currency_one = currencyEl_one.value; //Step 2.1:
  const currency_two = currencyEl_two.value;
  axios(`https://api.exchangerate-api.com/v4/latest/${currency_one}`) //Step 2.2,note2.2
    .then(res => {
      const rate = res.data.rates[currency_two]; //Step 2.2.1
      rateEl.innerText = `1 ${currency_one}= ${rate} ${currency_two}`; //Step 2.2.2:
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2); //Step 2.2.3
    });
}
//Step 1.4: Event listeners. có 4 chỗ khi có sự kiện thay đổi (event) là sẽ có 1 gì đó diễn ra ( func calculate)
currencyEl_one.addEventListener("change", calculate); // Note1.4
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

//Step3: swap:  cái nút này khi đc bấm (click) là sẽ có gì đó xảy ra (...)
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

//Step 1.3
calculate();

//Step 1.2: viết function calculate(){} trc để mình hình dung làm gì
//Step 1.3: sau tất cả là mình sẽ chạy run function calculate.
//Step2.1: lấy value của currency ng dùng chọn
//Step2.2:get API, axios-> res là object{data:{...},status:...}
//Step 2.2.1: lấy rate từ API
//Step 2.2.2: ban đầu div này k có nội dung gì, sau đc gán innerText là ...
//Step 2.2.3: tính ra r gán value vào amountEl_two. toFixed (lấy 2 chữ số thập phân)

//Note 1.4:chỉ cần tên function thôi
//Note 2.2 chạy thử này: là biết nó ra gì xong lấy DL dần dần
//axios(`https://api.exchangerate-api.com/v4/latest/USD`)
//.then(res=>{console.log(res)})
