// BÀI TẬP TUẦN 1
// Viết code vào chỗ TODO, sau đó chạy: npm test
// Quy tắc: KHÔNG dùng vòng lặp for/while. Chỉ dùng map/filter/reduce/find/some/every.
// KHÔNG sửa mảng hoặc object đầu vào.

// ---------------------------------------------------------------
// Bài 1. Lọc sản phẩm theo khoảng giá (bao gồm cả min và max)
// filterByPrice(products, 200000, 900000) → [Quần jean, Áo khoác, Mũ]
// ---------------------------------------------------------------
export const filterByPrice = (products, min, max) => {
  // TODO
};

// ---------------------------------------------------------------
// Bài 2. Nhóm sản phẩm theo vendor
// groupByVendor(products) → { Smind: [p1, p3], Levis: [p2], Nike: [p4, p5] }
// ---------------------------------------------------------------
export const groupByVendor = (products) => {
  // TODO (gợi ý: reduce với giá trị khởi tạo {})
};

// ---------------------------------------------------------------
// Bài 3. Tính tổng tiền giỏ hàng
// cart = [{ productId: 1, qty: 2 }, { productId: 5, qty: 1 }]
// cartTotal(products, cart) → 199000*2 + 1890000*1 = 2288000
// Nếu productId không tồn tại thì bỏ qua (tính là 0)
// ---------------------------------------------------------------
export const cartTotal = (products, cart) => {
  // TODO (gợi ý: reduce + find)
};

// ---------------------------------------------------------------
// Bài 4. Tăng số lượng 1 món trong giỏ, KHÔNG sửa cart gốc
// increaseQty(cart, 1) → [{ productId: 1, qty: 3 }, { productId: 5, qty: 1 }]
// Đây chính là cách bạn sẽ cập nhật state trong React tuần 4.
// ---------------------------------------------------------------
export const increaseQty = (cart, productId) => {
  // TODO (gợi ý: map + spread)
};

// ---------------------------------------------------------------
// Bài 5. Thêm vào giỏ, KHÔNG sửa cart gốc
// - Nếu đã có productId trong giỏ: tăng qty thêm 1
// - Nếu chưa có: thêm { productId, qty: 1 } vào cuối
// ---------------------------------------------------------------
export const addToCart = (cart, productId) => {
  // TODO (gợi ý: some, rồi dùng lại increaseQty hoặc spread)
};

// ---------------------------------------------------------------
// Bài 6. Lấy danh sách tag không trùng lặp
// uniqueTags(products) → ["ao", "sale", "quan", "phu-kien", "giay"]
// ---------------------------------------------------------------
export const uniqueTags = (products) => {
  // TODO (gợi ý: reduce hoặc flatMap + new Set)
};

// ---------------------------------------------------------------
// THỬ THÁCH NÂNG CAO (không bắt buộc)
// searchProducts(products, { keyword, vendor, onlyAvailable })
// - keyword: tìm trong title, không phân biệt hoa thường
// - vendor: nếu có thì lọc đúng vendor
// - onlyAvailable: nếu true thì chỉ lấy hàng còn
// - Tham số nào không truyền thì bỏ qua điều kiện đó
// Đây là logic cho trang collection bạn sẽ làm ở tuần 5.
// ---------------------------------------------------------------
export const searchProducts = (products, { keyword = "", vendor, onlyAvailable = false } = {}) => {
  // TODO
};
