const haveCash = true;

function buyStuff(total, haveCash) {
    let payment;
    if (haveCash === true) {
        payment = getChange(100, total);
    }
    return payment;
}

function getChange(payment, total) {
  let change = payment - total
  return change;
}

console.log("my change is: ", buyStuff(10, true))