'use strict';

const Cart = function (goods = [], totalPrice = 0, count = 0) {
  this.goods = goods;
  this.totalPrice = totalPrice;
  this.count = count;
};

Cart.prototype.calculateTotalPrice = function () {
  this.totalPrice = 0;
  this.goods.forEach(item => {
    this.totalPrice += item.price;
  });
  return this.totalPrice;
};

Cart.prototype.addGoods = function (good) {
  this.goods.push(good);
  this.increaseCount();
};

Cart.prototype.getTotalPrice = function () {
  return this.totalPrice;
};

Cart.prototype.increaseCount = function () {
  this.count += 1;
};

Cart.prototype.clear = function () {
  this.goods.length = 0;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function () {
  console.log('goods:', JSON.stringify(this.goods));
  console.log('totalPrice:', this.calculateTotalPrice());
};

const Goods = function (price, name, discont) {
  this.price = price;
  this.name = name;
  this.discont = discont;
};

const FoodGoods = function (price, name, discont, calory = 0) {
  Goods.call(this, price, name, discont);
  this.calory = calory;
};

const ClothingGoods = function (price, name, discont, matherial = '') {
  Goods.call(this, price, name, discont);
  this.matherial = matherial;
};

const TechnicalGoods = function (price, name, discont, type = '') {
  Goods.call(this, price, name, discont);
  this.type = type;
};

const apple = new FoodGoods(3.33, 'Gren juice', 0, 3000);
const dress = new ClothingGoods(9990, 'Red Shock', 3, 'cloth');
const tv = new TechnicalGoods(33000, 'Sony Bravia', 5, 'TV');

const goodsCart = new Cart();

goodsCart.addGoods(apple);
goodsCart.addGoods(dress);
goodsCart.addGoods(tv);
goodsCart.print();
