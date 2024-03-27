class Purchase {
  constructor(name, ...products) {
    this.name = name;
    this.products = products;
  }

  get price() {
    let result = 0;
    for (const product of this.products) {
      result += product.price;
    }
    return result;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.productPrice = price;
  }

  get price() {
    return this.productPrice;
  }
}

const computer = new Product("macBook", 2000);
const mouse = new Product("raizer", 50);

const electronics = new Purchase("electronics", computer, mouse);
console.log("electronic price - ", electronics.price);

const tshirt = new Product("guchi", 400);
const jeans = new Product("levis", 150);

const clothes = new Purchase("clothes", tshirt, jeans);
console.log("clothes price - ", clothes.price);
