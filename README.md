# <span style="color:#0d6efd">Mô Tả Dự Án Quản Lý Tour</span>

> <span style="color:#495057">Dự án hiện tại là một ứng dụng web dùng để quản lý thông tin các tour du lịch. Hệ thống tập trung vào các thao tác cơ bản của nhân viên hoặc quản trị viên khi cần xem, thêm, cập nhật, tìm kiếm và xóa tour.</span>

---

## <span style="color:#198754">1. Mục Đích</span>

Ứng dụng giúp quản lý danh sách tour du lịch trong hệ thống. Mỗi tour có các thông tin chính như:

- Tên tour
- Điểm đến
- Số lượng khách tối đa
- Thời lượng
- Ngày bắt đầu
- Giá
- Trạng thái hoạt động

Người dùng có thể truy cập trang danh sách tour để theo dõi toàn bộ tour hiện có, xem chi tiết từng tour, thêm tour mới, sửa thông tin tour đã có và xóa tour không còn cần quản lý.

---

## <span style="color:#198754">2. Các Màn Hình Chính</span>

### <span style="color:#0d6efd">Trang giới thiệu</span>

Trang giới thiệu hiển thị giao diện tổng quan về hệ thống tour. Trang này có phần giới thiệu, danh sách tour nổi bật nếu có dữ liệu, và một số nội dung điểm đến du lịch đang hiển thị sẵn.

### <span style="color:#0d6efd">Trang danh sách tour</span>

Trang danh sách tour là màn hình quản lý chính. Người dùng có thể xem các tour theo dạng bảng.

<span style="color:#6f42c1"><strong>Thông tin hiển thị trên danh sách gồm:</strong></span>

- Số thứ tự
- Tên tour
- Điểm đến
- Sức chứa
- Thời lượng
- Ngày bắt đầu
- Giá
- Trạng thái
- Các thao tác

Danh sách tour được sắp xếp theo tên tour tăng dần. Cột số thứ tự chỉ dùng để hiển thị trên giao diện, không phải mã tour trong cơ sở dữ liệu.

Người dùng có thể tìm kiếm tour theo điểm đến. Khi nhập từ khóa vào ô tìm kiếm, hệ thống sẽ lọc các tour có điểm đến phù hợp. Nếu không nhập từ khóa, hệ thống hiển thị toàn bộ danh sách tour.

### <span style="color:#0d6efd">Trang chi tiết tour</span>

Trang chi tiết hiển thị thông tin đầy đủ của một tour cụ thể.

<span style="color:#6f42c1"><strong>Tại trang này, người dùng có thể:</strong></span>

- Xem chi tiết tour
- Chuyển sang trang cập nhật tour
- Xóa tour thông qua hộp thoại xác nhận
- Quay lại danh sách tour

### <span style="color:#0d6efd">Trang thêm tour</span>

Trang thêm tour cho phép người dùng tạo mới một tour.

Người dùng cần nhập đầy đủ các thông tin bắt buộc. Nếu dữ liệu không hợp lệ, hệ thống sẽ hiện thông báo lỗi màu đỏ bên dưới trường nhập tương ứng.

Sau khi thêm thành công, hệ thống quay về trang danh sách tour và hiện thông báo thêm thành công.

### <span style="color:#0d6efd">Trang cập nhật tour</span>

Trang cập nhật tour cho phép người dùng sửa thông tin của một tour đã tồn tại.

Thông tin cũ của tour sẽ được hiển thị sẵn trên form. Người dùng có thể thay đổi các thông tin cần thiết và lưu lại.

Nếu cập nhật thành công, hệ thống quay về trang danh sách tour và hiện thông báo cập nhật thành công. Nếu bấm hủy, hệ thống quay về trang danh sách tour.

---

## <span style="color:#198754">3. Thông Tin Một Tour</span>

Mỗi tour hiện tại gồm các thông tin:

| Thông tin | Ý nghĩa |
| --- | --- |
| Tên tour | Tên của tour du lịch |
| Điểm đến | Địa điểm hoặc khu vực tour đi đến |
| Sức chứa | Số lượng khách tối đa |
| Thời lượng | Số ngày của tour |
| Ngày bắt đầu | Ngày tour khởi hành |
| Giá | Giá tour |
| Trạng thái | Tình trạng hoạt động của tour |

<span style="color:#6f42c1"><strong>Trạng thái tour hiện có ba giá trị:</strong></span>

- <span style="color:#198754"><strong>Active</strong></span>
- <span style="color:#dc3545"><strong>Inactive</strong></span>
- <span style="color:#ffc107"><strong>Draft</strong></span>

Trên trang danh sách, trạng thái <span style="color:#dc3545"><strong>Inactive</strong></span> được hiển thị màu đỏ để người dùng dễ nhận biết.

---

## <span style="color:#198754">4. Quy Tắc Kiểm Tra Dữ Liệu</span>

Hệ thống có kiểm tra dữ liệu khi thêm và cập nhật tour.

### <span style="color:#0d6efd">Tên tour</span>

- Bắt buộc nhập
- Độ dài từ 1 đến 200 ký tự

### <span style="color:#0d6efd">Điểm đến</span>

- Bắt buộc nhập
- Độ dài từ 1 đến 200 ký tự

### <span style="color:#0d6efd">Sức chứa</span>

- Bắt buộc nhập
- Phải là số
- Giá trị từ 1 đến 1000

### <span style="color:#0d6efd">Thời lượng</span>

- Bắt buộc nhập
- Phải là số
- Giá trị từ 1 đến 300

### <span style="color:#0d6efd">Ngày bắt đầu</span>

- Bắt buộc nhập
- Định dạng ngày là `dd/MM/yyyy`
- Phải là ngày trong tương lai
- Phải trước ngày hiện tại cộng 360 ngày

### <span style="color:#0d6efd">Giá</span>

- Bắt buộc nhập
- Phải là số
- Giá trị từ 0.1 đến 100000

### <span style="color:#0d6efd">Trạng thái</span>

- Bắt buộc chọn
- Chỉ chấp nhận `Active`, `Inactive` hoặc `Draft`

---

## <span style="color:#198754">5. Cách Nhập Ngày Bắt Đầu</span>

Trường ngày bắt đầu là ô nhập văn bản, không phải lịch chọn ngày của trình duyệt.

Người dùng nhập ngày theo định dạng:

```text
dd/MM/yyyy
```

Hệ thống có hỗ trợ tự động chèn dấu gạch chéo khi nhập ngày.

<span style="color:#6f42c1"><strong>Ví dụ:</strong></span>

- Nhập `01012027` sẽ được hỗ trợ thành `01/01/2027`
- Nhập `1/1/2027` rồi rời khỏi ô nhập sẽ thành `01/01/2027`

Nếu ngày không đúng định dạng hoặc không nằm trong khoảng hợp lệ, hệ thống hiện lỗi bên dưới trường ngày bắt đầu.

---

## <span style="color:#198754">6. Xóa Tour</span>

Khi người dùng bấm xóa tour, hệ thống không xóa ngay lập tức. Một hộp thoại xác nhận sẽ hiện ra để người dùng quyết định có tiếp tục xóa hay không.

Nếu người dùng xác nhận xóa, tour sẽ bị xóa khỏi danh sách và hệ thống quay về trang danh sách tour kèm thông báo xóa thành công.

---

## <span style="color:#198754">7. Thông Báo Sau Khi Thao Tác</span>

Sau các thao tác thành công, hệ thống hiện thông báo trên trang danh sách:

- <span style="color:#198754"><strong>Thêm tour thành công</strong></span>
- <span style="color:#198754"><strong>Cập nhật tour thành công</strong></span>
- <span style="color:#198754"><strong>Xóa tour thành công</strong></span>
