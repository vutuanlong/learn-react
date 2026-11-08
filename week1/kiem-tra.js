// File tự chấm bài, không cần sửa. Chạy: npm test
import assert from "node:assert/strict";
import { products } from "./data.js";
import * as bt from "./bai-tap.js";

const snapshot = JSON.stringify(products);
let pass = 0;
let fail = 0;

const test = (name, fn) => {
  try {
    fn();
    console.log(`  ✅ ${name}`);
    pass++;
  } catch (e) {
    console.log(`  ❌ ${name}\n     ${e.message.split("\n")[0]}`);
    fail++;
  }
};

const ids = (arr) => arr.map((p) => p.id);

console.log("\nBài 1: filterByPrice");
test("200k–900k", () => assert.deepEqual(ids(bt.filterByPrice(products, 200000, 900000)), [2, 3, 4]));
test("bao gồm biên", () => assert.deepEqual(ids(bt.filterByPrice(products, 199000, 199000)), [1]));
test("không có kết quả → []", () => assert.deepEqual(bt.filterByPrice(products, 5000000, 9000000), []));

console.log("\nBài 2: groupByVendor");
test("nhóm đúng", () => {
  const g = bt.groupByVendor(products);
  assert.deepEqual(Object.keys(g).sort(), ["Levis", "Nike", "Smind"]);
  assert.deepEqual(ids(g.Smind), [1, 3]);
  assert.deepEqual(ids(g.Nike), [4, 5]);
});
test("mảng rỗng → {}", () => assert.deepEqual(bt.groupByVendor([]), {}));

console.log("\nBài 3: cartTotal");
const cart = [{ productId: 1, qty: 2 }, { productId: 5, qty: 1 }];
test("tính đúng", () => assert.equal(bt.cartTotal(products, cart), 2288000));
test("giỏ rỗng → 0", () => assert.equal(bt.cartTotal(products, []), 0));
test("bỏ qua id không tồn tại", () =>
  assert.equal(bt.cartTotal(products, [{ productId: 99, qty: 1 }, { productId: 4, qty: 2 }]), 500000));

console.log("\nBài 4: increaseQty");
test("tăng đúng món", () =>
  assert.deepEqual(bt.increaseQty(cart, 1), [{ productId: 1, qty: 3 }, { productId: 5, qty: 1 }]));
test("không sửa cart gốc", () => {
  assert.ok(Array.isArray(bt.increaseQty(cart, 1)), "hàm chưa trả về mảng");
  assert.equal(cart[0].qty, 2);
});

console.log("\nBài 5: addToCart");
test("món đã có → tăng qty", () =>
  assert.deepEqual(bt.addToCart(cart, 5), [{ productId: 1, qty: 2 }, { productId: 5, qty: 2 }]));
test("món mới → thêm vào cuối", () =>
  assert.deepEqual(bt.addToCart(cart, 3), [...cart, { productId: 3, qty: 1 }]));
test("không sửa cart gốc", () => {
  assert.ok(Array.isArray(bt.addToCart(cart, 3)), "hàm chưa trả về mảng");
  bt.addToCart(cart, 1);
  assert.equal(cart.length, 2);
  assert.equal(cart[0].qty, 2);
});

console.log("\nBài 6: uniqueTags");
test("đúng thứ tự xuất hiện", () =>
  assert.deepEqual(bt.uniqueTags(products), ["ao", "sale", "quan", "phu-kien", "giay"]));

console.log("\nThử thách: searchProducts");
test("keyword không phân biệt hoa thường", () => assert.deepEqual(ids(bt.searchProducts(products, { keyword: "ÁO" })), [1, 3]));
test("vendor + onlyAvailable", () =>
  assert.deepEqual(ids(bt.searchProducts(products, { vendor: "Smind", onlyAvailable: true })), [1]));
test("không truyền gì → trả hết", () => assert.equal(bt.searchProducts(products).length, 5));

console.log("\nKiểm tra chung");
test("không sửa mảng products gốc", () => assert.ok(Array.isArray(bt.filterByPrice(products, 0, 1e9)), "hàm chưa làm") || assert.equal(JSON.stringify(products), snapshot));

console.log(`\nKết quả: ${pass} đạt, ${fail} chưa đạt\n`);
if (fail === 0) console.log("🎉 Xong tuần 1! Nhắn mình để review code và sang tuần 2.\n");
