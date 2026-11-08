# Tuần 1: Cú pháp ES6+ và xử lý mảng

> Vì sao học cái này trước React? Gần như mọi dòng React bạn viết đều dùng 3 thứ:
> **destructuring** (đọc props), **spread** (cập nhật state) và **map/filter** (render danh sách).
> Nắm chắc tuần này thì tuần 3–5 sẽ nhẹ hơn nhiều.

## Lịch học gợi ý (1–2 giờ/ngày)

| Ngày | Nội dung | File |
|------|----------|------|
| 1 | `let`/`const`, arrow function, template literal | `01-let-const-arrow.js` |
| 2 | Destructuring, spread, rest | `02-destructuring-spread.js` |
| 3 | `map`, `filter`, `find`, `some`, `every` | `03-array-methods.js` |
| 4 | `reduce` (khó nhất tuần, dành riêng 1 ngày) | `03-array-methods.js` phần cuối |
| 5–6 | Làm bài tập | `bai-tap.js`, chạy `npm test` |
| 7 | Ôn lại, làm thử thách nâng cao | `bai-tap.js` phần cuối |

**Cách học:** mở từng file ví dụ, đọc comment, chạy (`npm run vd1`), rồi **sửa thử** một vài chỗ để xem kết quả thay đổi thế nào. Đừng chỉ đọc.

---

## 1. `let` / `const`

- Mặc định dùng `const`. Chỉ dùng `let` khi biến **cần gán lại**.
- Không dùng `var` (phạm vi theo function, dễ gây lỗi).
- `const` chỉ cấm **gán lại**, không cấm sửa bên trong object/array:

```js
const cart = [];
cart.push(1);   // được
cart = [1];     // lỗi: Assignment to constant variable
```

## 2. Arrow function

```js
function add(a, b) { return a + b; }   // cách cũ
const add = (a, b) => a + b;           // 1 dòng: tự return
const square = x => x * x;             // 1 tham số: bỏ ngoặc được
const makeItem = (id) => ({ id });     // trả về object: phải bọc ()
```

## 3. Template literal

```js
const msg = `Sản phẩm ${title} giá ${price}đ`;
```

## 4. Destructuring

```js
const { title, price } = product;           // object
const { vendor: brand } = product;          // đổi tên
const { stock = 0 } = product;              // giá trị mặc định
const [first, second] = products;           // array
function Card({ title, price }) { ... }     // trong tham số → đây chính là cách React đọc props
```

## 5. Spread và rest `...`

Cùng ký hiệu `...` nhưng hai vai trò ngược nhau:

- **Spread** = "trải ra": `[...arr, x]`, `{ ...obj, price: 100 }`
- **Rest** = "gom lại": `const { id, ...others } = obj`, `function f(...args)`

```js
const updated = { ...product, price: 150000 };  // copy + sửa 1 field, không đụng bản gốc
```

> Đây là cách bạn sẽ cập nhật state trong React. React yêu cầu **tạo object mới**, không sửa trực tiếp.

## 6. Các hàm xử lý mảng

| Hàm | Trả về | Dùng khi |
|-----|--------|----------|
| `map(fn)` | mảng mới **cùng độ dài** | biến đổi từng phần tử |
| `filter(fn)` | mảng mới **ngắn hơn hoặc bằng** | lọc theo điều kiện |
| `find(fn)` | **1 phần tử** hoặc `undefined` | tìm 1 cái |
| `some(fn)` | `true`/`false` | có ít nhất 1 cái thoả? |
| `every(fn)` | `true`/`false` | tất cả đều thoả? |
| `reduce(fn, init)` | **bất cứ thứ gì** (số, object, mảng) | gom mảng thành 1 giá trị |

Cả 6 hàm đều **không sửa mảng gốc**.

### `reduce` hiểu đơn giản

```js
[1, 2, 3].reduce((acc, x) => acc + x, 0)
// vòng 1: acc=0, x=1 → 1
// vòng 2: acc=1, x=2 → 3
// vòng 3: acc=3, x=3 → 6
```

`acc` (accumulator) là "cái túi" mang kết quả từ vòng trước sang vòng sau. **Luôn truyền giá trị khởi tạo** (`0`, `{}`, `[]`).

---

## Lỗi hay gặp

1. Quên `return` khi arrow function có `{}`: `arr.map(x => { x * 2 })` trả về toàn `undefined`.
2. Trả object trong arrow mà quên `()`: `x => { id: x }` không trả về object.
3. Quên giá trị khởi tạo của `reduce`.
4. Dùng `map` chỉ để lặp mà không dùng kết quả. Khi đó nên dùng `forEach`.
5. Nghĩ spread là deep copy. Spread chỉ copy **1 tầng**: `{ ...p }` vẫn dùng chung mảng `p.tags`.

## Tự kiểm tra cuối tuần

Trả lời được mà không cần nhìn tài liệu:
- `map` và `forEach` khác nhau thế nào?
- `find` và `filter` khác nhau thế nào?
- Viết `reduce` tính tổng một mảng số.
- Copy một object và đổi 1 field mà không sửa bản gốc.
