// Ngày 2: Destructuring, spread, rest
// Chạy: npm run vd2

import { products } from "./data.js";

const product = products[0];

// ---------- Destructuring object ----------
const { title, price } = product;
console.log(title, price);

// Đổi tên biến + giá trị mặc định
const { vendor: brand, stock = 0 } = product;
console.log("brand:", brand, "| stock:", stock); // stock không có trong data nên lấy mặc định 0

// ---------- Destructuring array ----------
const [first, second, ...rest] = products;
console.log("first:", first.title, "| second:", second.title, "| còn lại:", rest.length);

// ---------- Destructuring trong tham số ----------
// Đây CHÍNH LÀ cách React component nhận props: function ProductCard({ title, price }) {...}
const describe = ({ title, vendor, price }) => `${title} của ${vendor}: ${price}đ`;
console.log(describe(products[3]));

// ---------- Spread với array ----------
const newProduct = { id: 6, title: "Tất cổ cao", vendor: "Smind", price: 49000, tags: [], available: true };
const moreProducts = [...products, newProduct]; // thêm vào cuối, KHÔNG sửa products
console.log("products:", products.length, "| moreProducts:", moreProducts.length);

// ---------- Spread với object ----------
const onSale = { ...product, price: 149000 }; // copy rồi ghi đè price
console.log("gốc:", product.price, "| bản mới:", onSale.price);

// ---------- Rest với object ----------
const { id, ...withoutId } = product;
console.log("không có id:", withoutId);

// ---------- Rest trong tham số ----------
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log("sum:", sum(1, 2, 3, 4));

// ---------- CẨN THẬN: spread chỉ copy 1 tầng ----------
const copy = { ...product };
copy.tags.push("hot");           // sửa mảng tags của copy...
console.log("gốc bị ảnh hưởng:", product.tags); // ...mà bản gốc cũng đổi!
// Cách đúng: copy cả tầng bên trong
const safeCopy = { ...product, tags: [...product.tags, "new"] };
console.log("safeCopy.tags:", safeCopy.tags);

// ---------- THỬ NGAY ----------
// 1. Từ products[4], lấy ra title và price bằng destructuring
// 2. Tạo bản sao của products[2] với available = true, không sửa bản gốc
// 3. Tạo mảng mới bỏ đi phần tử đầu tiên của products (gợi ý: rest)
