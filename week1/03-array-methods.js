// Ngày 3–4: map, filter, find, some, every, reduce
// Chạy: npm run vd3

import { products } from "./data.js";

// ---------- map: biến đổi từng phần tử, độ dài giữ nguyên ----------
const titles = products.map((p) => p.title);
console.log("titles:", titles);

// Trong React bạn sẽ viết: products.map(p => <ProductCard key={p.id} {...p} />)

// ---------- filter: giữ lại phần tử thoả điều kiện ----------
const inStock = products.filter((p) => p.available);
console.log("còn hàng:", inStock.map((p) => p.title));

const saleItems = products.filter((p) => p.tags.includes("sale"));
console.log("đang sale:", saleItems.map((p) => p.title));

// ---------- find: lấy 1 phần tử đầu tiên thoả điều kiện ----------
const nike = products.find((p) => p.vendor === "Nike");
console.log("Nike đầu tiên:", nike.title);

const notFound = products.find((p) => p.vendor === "Adidas");
console.log("không thấy:", notFound); // undefined, nhớ kiểm tra trước khi dùng

// ---------- some / every ----------
console.log("có món > 1 triệu?", products.some((p) => p.price > 1000000));
console.log("tất cả còn hàng?", products.every((p) => p.available));

// ---------- Nối chuỗi (chaining) ----------
const cheapInStockTitles = products
  .filter((p) => p.available)
  .filter((p) => p.price < 500000)
  .map((p) => p.title);
console.log("rẻ và còn hàng:", cheapInStockTitles);

// =====================================================
// reduce: gom cả mảng thành 1 giá trị
// =====================================================

// 1) Tính tổng giá
const total = products.reduce((acc, p) => acc + p.price, 0);
console.log("tổng giá:", total);

// 2) Đếm số sản phẩm theo vendor → kết quả là object
const countByVendor = products.reduce((acc, p) => {
  acc[p.vendor] = (acc[p.vendor] || 0) + 1;
  return acc; // QUAN TRỌNG: luôn return acc
}, {});
console.log("đếm theo vendor:", countByVendor);

// 3) Tìm sản phẩm đắt nhất
const mostExpensive = products.reduce((max, p) => (p.price > max.price ? p : max));
console.log("đắt nhất:", mostExpensive.title);

// Xem từng bước reduce chạy thế nào:
[10, 20, 30].reduce((acc, x, i) => {
  console.log(`  vòng ${i}: acc=${acc}, x=${x} → ${acc + x}`);
  return acc + x;
}, 0);

// ---------- THỬ NGAY ----------
// 1. Dùng map tạo mảng giá đã giảm 10%
// 2. Dùng filter lấy sản phẩm của Smind
// 3. Dùng reduce tính tổng giá các sản phẩm còn hàng
// 4. Dùng reduce tạo object { 1: "Áo thun basic", 2: "Quần jean slim", ... }
