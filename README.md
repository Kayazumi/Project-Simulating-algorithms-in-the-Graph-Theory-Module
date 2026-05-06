# Mô phỏng các thuật toán trong học phần Lý thuyết đồ thị

## Giới thiệu

**GraphViz – Algorithm Visualizer** là ứng dụng web trực quan hoá các thuật toán đồ thị kinh điển, phục vụ mục đích học tập và giảng dạy trong học phần **Lý thuyết đồ thị**. Ứng dụng cho phép người dùng tự xây dựng đồ thị, chọn thuật toán và quan sát từng bước thực thi được mô phỏng theo thời gian thực, kèm theo mã giả, bảng dữ liệu và nhật ký hoạt động.

## Các thuật toán được mô phỏng

| # | Thuật toán | Tên đầy đủ | Độ phức tạp | Đặc điểm |
|---|-----------|------------|-------------|----------|
| 1 | **DFS** | Depth First Search | O(V + E) | Tìm kiếm theo chiều sâu, sử dụng ngăn xếp |
| 2 | **BFS** | Breadth First Search | O(V + E) | Tìm kiếm theo chiều rộng, sử dụng hàng đợi |
| 3 | **Dijkstra** | Dijkstra's Shortest Path | O((V+E) log V) | Đường đi ngắn nhất, chỉ hỗ trợ cạnh dương |
| 4 | **Ford-Bellman** | Bellman-Ford Algorithm | O(V × E) | Đường đi ngắn nhất, hỗ trợ cạnh âm, phát hiện chu trình âm |
| 5 | **Prim** | Prim's Minimum Spanning Tree | O((V+E) log V) | Cây khung nhỏ nhất |

## Tính năng chính

- **Trình soạn đồ thị trực quan**: Thêm/xóa đỉnh, thêm/xóa cạnh, chỉnh sửa trọng số bằng cách kéo thả và click
- **Hỗ trợ đồ thị có hướng và vô hướng**: Chuyển đổi linh hoạt giữa hai loại đồ thị
- **Mô phỏng từng bước**: Phát tự động hoặc điều khiển thủ công (tiến/lùi từng bước)
- **Mã giả đồng bộ**: Dòng mã giả được highlight tương ứng với bước đang thực thi
- **Bảng dữ liệu**: Hiển thị trạng thái ngăn xếp/hàng đợi, bảng khoảng cách, tổng trọng số MST
- **Nhật ký hoạt động**: Ghi lại chi tiết từng bước xử lý của thuật toán
- **Đồ thị mẫu**: Mỗi thuật toán có sẵn đồ thị mẫu phù hợp để demo
- **Phím tắt**: Hỗ trợ điều khiển nhanh qua bàn phím (Space, ←, →, N, E, S, D)
- **Giao diện sáng/tối**: Chuyển đổi giữa Dark Mode và Light Mode, lưu lựa chọn tự động
- **Tốc độ tuỳ chỉnh**: 5 mức tốc độ mô phỏng từ rất chậm đến rất nhanh

## Công nghệ sử dụng

- **HTML5** – Cấu trúc trang
- **CSS3** – Giao diện với CSS Variables, hỗ trợ theme sáng/tối
- **JavaScript (Vanilla)** – Logic thuật toán và tương tác, không dùng thư viện bên ngoài
- **Canvas API** – Vẽ đồ thị trực tiếp trên canvas
- **Google Fonts** – Font Space Grotesk & Fira Code

> Ứng dụng hoàn toàn là **zero-dependency** – không cần cài đặt bất kỳ framework hay thư viện nào.

## Cấu trúc dự án

```
├── index.html              # Trang HTML chính
├── css/
│   ├── style.css           # Biến CSS, reset, theme sáng/tối
│   ├── home.css            # Giao diện trang chủ
│   ├── simulator.css       # Giao diện trang mô phỏng
│   └── responsive.css      # Responsive cho thiết bị di động
├── js/
│   ├── data.js             # Dữ liệu thuật toán & mã giả
│   ├── app.js              # Khởi tạo ứng dụng, state toàn cục
│   ├── canvas.js           # Vẽ đồ thị (node, edge, arrow)
│   ├── graph.js            # Quản lý đỉnh/cạnh, đồ thị mẫu
│   ├── algorithms.js       # 5 thuật toán (DFS, BFS, Dijkstra, Bellman-Ford, Prim)
│   └── ui.js               # Tương tác UI, playback, phím tắt
└── README.md
```

## Hướng dẫn sử dụng

### Cài đặt & Chạy

Không cần cài đặt. Chỉ cần mở file `index.html` bằng trình duyệt web:

```bash
# Hoặc dùng live server (nếu có)
npx serve .
```

### Thao tác cơ bản

1. **Chọn thuật toán**: Tại trang chủ, click vào card thuật toán muốn mô phỏng
2. **Chỉnh sửa đồ thị**:
   - Click **"Thêm nút"** rồi click vào canvas để thêm đỉnh
   - Click **"Thêm cạnh"** rồi click 2 đỉnh liên tiếp để tạo cạnh
   - Nhấp đúp vào cạnh để sửa trọng số
   - Chuột phải vào đỉnh để xóa
3. **Chạy thuật toán**: Click **"▶ Chạy lại thuật toán"** hoặc nhấn **Space**
4. **Điều khiển**: Dùng nút ◀ ▶ hoặc phím ← → để tiến/lùi từng bước

### Phím tắt

| Phím | Chức năng |
|------|-----------|
| `Space` | Phát / Dừng mô phỏng |
| `←` | Lùi một bước |
| `→` | Tiến một bước |
| `N` | Chế độ thêm nút |
| `E` | Chế độ thêm cạnh |
| `S` | Chế độ chọn |
| `D` | Chế độ xóa |
| `Esc` | Quay về chế độ chọn |
