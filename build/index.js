System.register("items", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Items;
    return {
        setters: [],
        execute: function () {
            Items = /** @class */ (function () {
                function Items(products) {
                    this.products = products;
                }
                return Items;
            }());
            exports_1("default", Items);
        }
    };
});
System.register("Basket", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Basket;
    return {
        setters: [],
        execute: function () {
            Basket = /** @class */ (function () {
                function Basket() {
                    this.list = [];
                }
                Basket.prototype.addElement = function (el) {
                    this.list.push(el);
                };
                Basket.prototype.removeElement = function (el) {
                    var deleteIndex = this.list.findIndex(function (listEl) {
                        return listEl.id === el.id;
                    });
                    console.log(deleteIndex);
                };
                return Basket;
            }());
            exports_2("default", Basket);
        }
    };
});
System.register("index", ["items", "Basket"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var items_1, Basket_1;
    return {
        setters: [
            function (items_1_1) {
                items_1 = items_1_1;
            },
            function (Basket_1_1) {
                Basket_1 = Basket_1_1;
            }
        ],
        execute: function () {
            document.addEventListener("DOMContentLoaded", function () {
                var products = [
                    {
                        id: 0,
                        name: "Apple",
                        price: 20
                    },
                    {
                        id: 1,
                        name: "Banana",
                        price: 210
                    },
                    {
                        id: 2,
                        name: "Lemon",
                        price: 2
                    },
                    {
                        id: 3,
                        name: "Gasfdsf",
                        price: 5
                    },
                ];
                var items = new items_1["default"](products);
                var basket = new Basket_1["default"]();
            });
        }
    };
});
