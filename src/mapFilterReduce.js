let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 3, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 5, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 6, unitPrice: 150 },
];

function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}

addToCart(cart);

console.log(cart);

let sayi = 10;

function name(number) {
  number += 1;
}

console.log(sayi);

//cart.map((product) => console.log(product.productName));
cart.map((product) => {
  console.log(
    product.productName + " : " + product.quantity * product.unitPrice
  );
});

let quantityOver2 = cart.filter((product) => product.quantity > 2);
console.log(quantityOver2);

console.log(cart);

let total = cart.reduce((acc, cur) => acc + cur.quantity * cur.unitPrice, 0);
console.log(total);
