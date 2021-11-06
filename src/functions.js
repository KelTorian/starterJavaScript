function addToCart(productName = "elma", quantity) {
  console.log("sepete eklendi: " + productName + "Adet: " + quantity);
}

addToCart("Süpürge");
addToCart("Kahve");
addToCart();

let sayHello = () => console.log("Hello");

sayHello();

let product1 = {
  productName: "elma",
  unitPrice: 10,
  quantity: 5,
};

function addToCart3(product) {
  console.log("Ürün: " + product.productName);
  console.log("Miktar: " + product.quantity);
  console.log("Fiyat: " + product.unitPrice);
}

addToCart3(product1);

let products = [
  { productName: "elma", unitPrice: 10, quantity: 5 },
  { productName: "karpuz", unitPrice: 3, quantity: 2 },
  { productName: "armut", unitPrice: 1, quantity: 10 },
];

function addToCart4(products) {
  console.log(products);
}

addToCart4(products);


//hello