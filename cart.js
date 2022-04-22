'use strict';

const Cart = function (goods = [], totalPrice = 0, count = 0) {
  this.goods = goods;
  this.totalPrice = totalPrice;
  this.count = count;

  this.calculateTotalPrice = function () {
    this.totalPrice = 0;
    this.goods.forEach(item => {
      this.totalPrice += item.price;
    });
    return this.totalPrice;
  };

  this.addGoods = function (good) {
    this.goods.push(good);
    this.increaseCount();
  };

  this.getTotalPrice = function () {
    return this.totalPrice;
  };

  this.increaseCount = function (goodsCount) {
    this.count += goodsCount;
  };

  this.clear = function () {
    this.goods.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  };

  this.print = function () {
    console.log('goods:', JSON.stringify(this.goods));
    console.log('totalPrice:', this.calculateTotalPrice());
  };
};

const Goods = function (price, goodName, discont) {
  this.price = price;
  this.goodName = goodName;
  this.discont = discont;
};

const FoodGoods = function () {
  this.calory = 0;
};
FoodGoods.prototype = Goods;

const ClothingGoods = function () {
  this.matherial = '';
};
ClothingGoods.prototype = Goods;

const TechnicalGoods = function () {
  this.type = '';
};
TechnicalGoods.prototype = Goods;

const apple = new FoodGoods();
apple.goodName = 'Gren juice';
apple.price = 3.33;
apple.discont = 0;
apple.calory = 33;
console.log('apple: ', apple);

const dress = new ClothingGoods();
dress.goodName = 'Red Shock';
dress.price = 9990;
dress.discont = 3;
dress.matherial = 'cloth';
console.log('dress: ', dress);

const tv = new TechnicalGoods();
tv.goodName = 'Sony Bravia';
tv.price = 33000;
tv.discont = 10;
tv.type = 'TV';
console.log('tv: ', tv);

const goodsCart = new Cart();
goodsCart.addGoods(apple);
goodsCart.addGoods(dress);
goodsCart.addGoods(tv);
goodsCart.print();
