function buyStuff(total, haveCash) {
    let payment;
    if (haveCash === true) {
        payment = 100;
    }
    return payment;
}

function buyStuffDelay(total, haveCash) {
    let payment;
    setTimeout(function () {
        payment = 100;
        console.log("Payment in timeout is:", payment);
    }, 0);
    console.log("Payment is: ", payment);
    return payment;
}

function getChange(payment, total) {
    console.log("What did I pay?", payment);
    const change = payment - total;
    return change;
}

  //const cashGivenToCashier = buyStuff(10, true);
const cashGivenToCashier = buyStuffDelay(10, true);

console.log("what is my change?", getChange(cashGivenToCashier, 10));
