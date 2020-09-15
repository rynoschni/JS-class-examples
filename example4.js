const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const haveCash = true;

function buyStuff(total, haveCash) {
    payment = new Promise(function (resolve) {
        setTimeout(function () {
            if (haveCash === true) {
                const myChange = getChange(100, total);
                console.log("my change is:", myChange);
                return myChange;
            }
        }, 100);
    });
  return payment;
}

function getChange(payment, total) {
  let change = payment - total;
  return change;
}

console.log(buyStuff(10, true));


