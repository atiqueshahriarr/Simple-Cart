const cards = document.querySelectorAll(".card");
console.log(cards);
let counter = 1;
let totalAmount = 0, discountAmount = 0, payableAmount = 0;



for (let item of cards) {
  const cartBtn = item.querySelector("button");
  console.log(cartBtn);
  cartBtn.addEventListener("click", function () {
    const cartTitle = item.querySelector("h3").innerText;
    const cartPriceDollar = item.querySelector("p").innerText;
    const cartPrice = cartPriceDollar.split(" ")[1];

    const p = document.createElement("p");
    p.innerText = counter + ". " + cartTitle;

    const cartItems = document.querySelector("#cartItems");
    cartItems.appendChild(p);
    counter++;

    let totalPrice = document.getElementById("totalPrice");

    totalAmount = totalAmount + parseFloat(cartPrice);
    totalPrice.innerText = totalAmount.toFixed(2);

    let discountPrice = document.getElementById("discountPrice");
    discountPrice.innerText = discountAmount.toFixed(2);

    payableAmount = totalAmount - discountAmount;
    let payablePrice = document.getElementById("payablePrice");
    payablePrice.innerText = payableAmount.toFixed(2);
  })

}




function applyBtn() {
  const couponField = document.getElementById("couponField").value;
  if (totalAmount < 200) {
    alert("Please add more product for getting discount")
  }
  else if (couponField !== "SELL 200") {
    alert("Please type the exact code 'SELL 200'")
  }
  else {
    if (couponField === "SELL 200" && totalAmount >= 200) {
      discountAmount = totalAmount * (20 / 100);
    }

    let discountPrice = document.getElementById("discountPrice");
    discountPrice.innerText = discountAmount.toFixed(2);

    payableAmount = totalAmount - discountAmount;
    let payablePrice = document.getElementById("payablePrice");
    payablePrice.innerText = payableAmount.toFixed(2);
  }


}



