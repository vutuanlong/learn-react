// Ngày 1: let/const, arrow function, template literal
// Chạy: npm run vd1

import { products } from "./data.js";

// ---------- let / const ----------
const shopName = "Smind Store"; // không đổi → const
let visitCount = 0;             // sẽ thay đổi → let
visitCount = visitCount + 1;

const cart = [];
cart.push("Áo thun"); // OK: const chỉ cấm gán lại, không cấm sửa bên trong
console.log("cart:", cart);

// ---------- Arrow function ----------
// Cách cũ
function formatPriceOld(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

// Arrow function, viết 1 dòng thì tự động return
const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

console.log(formatPriceOld(199000), "=", formatPrice(199000));

// Có nhiều dòng thì phải dùng {} và viết return
const discount = (price, percent) => {
  const off = (price * percent) / 100;
  return price - off;
};
console.log("Giảm 20%:", formatPrice(discount(899000, 20)));

// Trả về object thì bọc trong ()
const toCartItem = (product) => ({ id: product.id, qty: 1 });
console.log("cart item:", toCartItem(products[0]));

// ---------- Template literal ----------
const p = products[1];
const label = `${p.title} (${p.vendor}) - ${formatPrice(p.price)}`;
console.log(label);

// Có thể viết biểu thức bên trong ${}
console.log(`Trạng thái: ${p.available ? "Còn hàng" : "Hết hàng"}`);

// ---------- THỬ NGAY ----------
// 1. Viết arrow function isExpensive(price): trả về true nếu price > 500000
// 2. In ra: "Giày chạy bộ là hàng đắt" bằng template literal

const isExpensive = (price) => price > 500000;
const product = products[4];
console.log(`${product.title} là hàng ${isExpensive(product.price) ? "đắt" : "rẻ"}`);