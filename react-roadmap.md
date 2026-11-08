# Lộ trình React 16 tuần

Mỗi ngày 1–2 giờ. Tick `[x]` vào mục đã xong.

## Giai đoạn 0: JavaScript hiện đại

### Tuần 1: Cú pháp ES6+ và xử lý mảng
- [ ] `let`/`const`, arrow function, template literal
- [ ] Destructuring, spread và rest `...`
- [ ] `map`, `filter`, `reduce`, `find`, `some`
- [ ] **Bài tập:** viết hàm lọc sản phẩm theo khoảng giá, nhóm theo vendor, tính tổng tiền giỏ hàng

### Tuần 2: Module, bất đồng bộ, bất biến
- [ ] `import`/`export`
- [ ] Promise, `async`/`await`, `fetch`, `try/catch`
- [ ] Immutability: copy object/array thay vì sửa trực tiếp
- [ ] **Bài tập:** fetch `/products.json` của một store Shopify, render bằng JS thuần và lọc theo vendor

## Giai đoạn 1: React cơ bản

### Tuần 3: Vite, JSX, component, props
- [ ] Tạo project bằng `npm create vite@latest`
- [ ] JSX, component, props, `children`
- [ ] Đọc react.dev mục "Describing the UI"
- [ ] **Bài tập:** dựng `ProductCard` và `ProductGrid` tĩnh từ một mảng dữ liệu

### Tuần 4: State và sự kiện
- [ ] `useState`, `onClick`, `onChange`
- [ ] Conditional rendering, render list với `key`
- [ ] Đọc react.dev mục "Adding Interactivity"
- [ ] **Bài tập:** Todo app có thêm, sửa, xoá và lọc

### Tuần 5: Form và cách chia component
- [ ] Controlled input, select, checkbox
- [ ] Lifting state up
- [ ] Đọc kỹ "Thinking in React"
- [ ] **Bài tập:** trang collection có search, sort và lọc theo khoảng giá

### Tuần 6: Effect, gọi API, ref
- [ ] `useEffect`: dependency array, cleanup
- [ ] Hiển thị trạng thái loading và error
- [ ] `useRef`; đọc "You Might Not Need an Effect"
- [ ] **Bài tập:** nối trang collection với API thật và thêm giỏ hàng đơn giản

## Giai đoạn 2: React trung cấp

### Tuần 7: Context và reducer
- [ ] `useContext`, `useReducer`, dùng kết hợp hai cái
- [ ] **Bài tập:** `CartContext` với reducer (add, remove, update quantity)

### Tuần 8: Custom hook và tối ưu render
- [ ] Viết `useFetch`, `useLocalStorage`
- [ ] `memo`, `useMemo`, `useCallback`: khi nào cần, khi nào thừa
- [ ] Dùng React DevTools và Profiler
- [ ] **Bài tập:** giỏ hàng lưu localStorage, reload trang vẫn còn

### Tuần 9: Routing và styling
- [ ] React Router: routes, `useParams`, nested route, layout
- [ ] Tailwind CSS hoặc CSS Modules
- [ ] **Bài tập:** mini store có 4 trang: home, collection, product, cart

### Tuần 10: TypeScript
- [ ] type, interface, union, generic
- [ ] Gắn kiểu cho props, state, event và dữ liệu API
- [ ] **Bài tập:** chuyển mini store sang TS, không còn `any`

## Giai đoạn 3: Hệ sinh thái

### Tuần 11: Dữ liệu server và global state
- [ ] TanStack Query: `useQuery`, `useMutation`, cache
- [ ] Zustand
- [ ] **Bài tập:** thay `useFetch` bằng TanStack Query, chuyển cart sang Zustand

### Tuần 12: Form và React 19
- [ ] React Hook Form + Zod
- [ ] Actions, `useActionState`, `useOptimistic`, `use`
- [ ] **Bài tập:** form checkout có validate, nút đặt hàng cập nhật optimistic

### Tuần 13: Test và UI kit
- [ ] Vitest + React Testing Library
- [ ] shadcn/ui
- [ ] **Bài tập:** viết test cho `Cart` và `ProductCard`

## Giai đoạn 4: Full-stack với Hydrogen

### Tuần 14: React Router v7 framework mode
- [ ] `loader`, `action`, SSR, xử lý lỗi theo route
- [ ] **Bài tập:** dựng lại mini store dùng loader/action

### Tuần 15: Hydrogen và Storefront API
- [ ] Tạo project bằng `npm create @shopify/hydrogen@latest`
- [ ] Storefront API, viết GraphQL query cho product và collection
- [ ] **Bài tập:** trang collection và product lấy dữ liệu thật từ dev store

### Tuần 16: Hoàn thiện và deploy
- [ ] Cart Hydrogen, SEO (meta, sitemap)
- [ ] Deploy lên Oxygen hoặc Vercel
- [ ] **Bài tập:** viết README, có link demo để đưa vào portfolio

---

**Tài liệu:**
- https://react.dev/learn
- https://javascript.info
- https://fullstackopen.com
- https://shopify.dev/docs/storefronts/headless/hydrogen

**Nguyên tắc:** 30% học, 70% tự code. Mỗi giai đoạn đẩy ít nhất một project lên GitHub.
