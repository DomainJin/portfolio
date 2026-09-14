import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "robot-mecanum-board",
    name: "Bo điều khiển Robot Mecanum",
    tagline:
      "Bo mạch điều khiển robot bánh Mecanum trên nền ESP32-S3, 5 kênh driver động cơ có encoder.",
    description:
      "Thiết kế phần cứng cho robot di chuyển bằng bánh Mecanum tại phòng R&D VisionX. Bo dùng module ESP32-S3 làm bộ điều khiển trung tâm, tích hợp 5 kênh driver động cơ (EN/PWM/DIR) kèm ngõ vào encoder phản hồi cho từng động cơ, tầng opto cách ly bảo vệ phần điều khiển khỏi phần công suất, khối nguồn riêng có lọc nhiều tầng và ngõ ra I2C/UART để mở rộng. Toàn bộ schematic và layout PCB hai lớp thực hiện trên EasyEDA, có kiểm tra DRC và dựng mô hình 3D trước khi gia công.",
    role: "Thiết kế phần cứng",
    period: "2026",
    image: "/projects/placeholder.svg",
    tech: ["EasyEDA", "ESP32-S3", "Thiết kế PCB", "Driver động cơ", "Encoder", "Opto cách ly"],
    links: {},
    featured: true,
  },
  {
    slug: "bldc-pid-control",
    name: "Điều khiển động cơ BLDC bằng PID",
    tagline: "Đồ án chuyên ngành điều khiển tốc độ động cơ BLDC.",
    description:
      "Đồ án chuyên ngành: điều khiển tốc độ động cơ BLDC bằng thuật toán PID. STM32 đảm nhận vòng điều khiển và đọc phản hồi, ESP32 phụ trách giám sát; giao tiếp qua I2C và UART, sử dụng ADC và PWM.",
    role: "Sinh viên thực hiện",
    period: "09/2023 – 11/2023",
    image: "/projects/placeholder.svg",
    tech: ["STM32", "ESP32", "PID", "I2C", "UART", "PWM"],
    links: {},
  },
  {
    slug: "temperature-display-system",
    name: "Hệ thống đo và hiển thị nhiệt độ",
    tagline: "Đo nhiệt độ bằng DS18B20, hiển thị trên LED 7 đoạn.",
    description:
      "Đồ án môn học: dùng PIC16F877A đọc cảm biến nhiệt độ DS18B20 qua giao tiếp OneWire, xử lý và hiển thị giá trị lên LED 7 đoạn.",
    role: "Sinh viên thực hiện",
    period: "2023",
    image: "/projects/placeholder.svg",
    tech: ["PIC16F877A", "DS18B20", "OneWire", "LED 7 đoạn"],
    links: {},
  },
  {
    slug: "passive-avoidance-model",
    name: "Passive Avoidance Model",
    tagline:
      "Mô hình tránh né thụ động đo trí nhớ chuột thí nghiệm — giải Nhất NCKH sinh viên cấp trường.",
    description:
      "Mô hình thí nghiệm đánh giá khả năng ghi nhớ của chuột, phục vụ so sánh hiệu quả thuốc giữa các nhóm đối tượng. Buồng tối được gắn nguồn điện giật AC điều chỉnh được điện áp và dòng, buồng sáng là vùng an toàn. Raspberry Pi 5 làm CPU chính chạy nhận diện chuột bằng model YOLO (Ultralytics), sinh heatmap mật độ di chuyển theo thời gian; Arduino Uno làm slave giao tiếp qua Modbus RS485. Giao diện vận hành viết bằng PyQt6 kèm web application để xem kết quả.",
    role: "Trưởng nhóm",
    period: "01/2024 – 07/2024",
    image: "/projects/placeholder.svg",
    tech: ["Raspberry Pi 5", "YOLO", "OpenCV", "PyQt6", "Modbus RS485", "Arduino"],
    links: { source: "https://github.com/DomainJin/PASSIVE-AVOIDANCE-MODEL" },
    featured: true,
  },
  {
    slug: "led-boards",
    name: "Loạt bo mạch LED trưng bày",
    tagline:
      "LED Cube, LED Curtain, LED Fan và bo driver dòng không đổi dùng PT4115.",
    description:
      "Nhóm bo mạch LED thiết kế cho các sản phẩm trưng bày tương tác tại VisionX: bo mainboard và bo LED cho khối LED Cube (kèm mảng cảm biến hồng ngoại), màn LED Curtain, LED Fan, và bo LED vuông dùng IC driver dòng không đổi PT4115 — qua nhiều phiên bản layout trước khi chốt bản sản xuất.",
    role: "Thiết kế phần cứng",
    period: "2025 – 2026",
    image: "/projects/placeholder.svg",
    tech: ["EasyEDA", "PT4115", "Thiết kế PCB", "Ma trận LED", "Cảm biến hồng ngoại"],
    links: {},
  },
  {
    slug: "line-following-robot",
    name: "Robot dò line",
    tagline: "Robot dò line thi đấu tại cuộc thi Robotics.",
    description:
      "Thiết kế và thi đấu robot dò line. Dùng STM32 điều khiển, cảm biến dò line BFD-1000 và thuật toán PID để bám line ổn định ở tốc độ cao.",
    role: "Thành viên nhóm",
    period: "11/2023 – 12/2023",
    image: "/projects/placeholder.svg",
    tech: ["STM32", "PID", "BFD-1000"],
    links: {},
  },
  {
    slug: "automatic-door-lock",
    name: "Khóa cửa tự động",
    tagline: "Khóa cửa dùng RFID và bàn phím, lưu thẻ vào bộ nhớ flash.",
    description:
      "Đồ án môn học: hệ thống khóa cửa dùng PIC16F877A, xác thực bằng thẻ RFID hoặc mã nhập từ keypad, danh sách thẻ lưu trong flash, điều khiển servo mở khóa và hiển thị trạng thái trên LCD.",
    role: "Sinh viên thực hiện",
    period: "11/2022 – 12/2022",
    image: "/projects/placeholder.svg",
    tech: ["PIC16F877A", "RFID", "Keypad", "Servo", "LCD"],
    links: {},
  },
  {
    slug: "basic-smart-home",
    name: "Basic Smart Home",
    tagline: "Hệ thống nhà thông minh cơ bản điều khiển qua ứng dụng.",
    description:
      "Đồ án môn học: điều khiển và giám sát thiết bị trong nhà qua ESP8266, giao diện điều khiển dùng Blynk, dữ liệu lưu trên Firebase.",
    role: "Sinh viên thực hiện",
    period: "2023",
    image: "/projects/placeholder.svg",
    tech: ["ESP8266", "Blynk", "Firebase"],
    links: {},
  },
  {
    slug: "driver-drowsiness-detection",
    name: "Hệ thống phát hiện tài xế buồn ngủ",
    tagline: "Phát hiện dấu hiệu buồn ngủ của tài xế bằng thị giác máy tính.",
    description:
      "Đồ án môn học: dùng Raspberry Pi 3 kết hợp OpenCV và TensorFlow để nhận diện trạng thái mắt và dấu hiệu buồn ngủ của tài xế, cảnh báo khi phát hiện nguy cơ.",
    role: "Sinh viên thực hiện",
    period: "2023",
    image: "/projects/placeholder.svg",
    tech: ["Raspberry Pi 3", "OpenCV", "TensorFlow"],
    links: {},
  },
  {
    slug: "drawtogether",
    name: "DrawTogether",
    tagline: "Bảng vẽ cộng tác real-time — nhiều người cùng vẽ trên một link.",
    description:
      "Ứng dụng vẽ cộng tác thời gian thực. Nhiều người truy cập cùng một phòng và vẽ đồng thời, thấy con trỏ của nhau theo thời gian thực. Frontend dùng React + Canvas API + Zustand, backend Fastify + Socket.IO với Redis adapter để pub/sub và quản lý session, PostgreSQL lưu lịch sử nét vẽ. Triển khai bằng Docker Compose sau Nginx có hỗ trợ WebSocket.",
    role: "Fullstack Developer",
    period: "2025",
    image: "/projects/placeholder.svg",
    tech: ["React", "Socket.IO", "Fastify", "Redis", "PostgreSQL", "Docker", "Nginx"],
    links: { source: "https://github.com/DomainJin/drawtogether" },
    featured: true,
  },
  {
    slug: "name-picker",
    name: "Name Picker",
    tagline:
      "Công cụ quay số trúng thưởng cho sự kiện, bánh xe dạng reel cuộn qua danh sách hàng trăm người.",
    description:
      "Ứng dụng quay thưởng dùng trong sự kiện tại VisionX. Nhập danh sách người tham dự từ file Excel/CSV (tự nhận diện cột tên), quay bằng bánh xe dạng reel hiển thị 10 tên trong khung nhìn và dừng chậm dần đúng người thắng. Hỗ trợ cơ cấu trước người thắng cho từng vòng, bật/tắt chế độ loại người đã trúng, và mở màn hình trình chiếu riêng cho khán giả — đồng bộ real-time với cửa sổ điều khiển qua BroadcastChannel. Lịch sử trúng thưởng lưu kèm thời gian và xuất được ra Excel/CSV. Chạy hoàn toàn client-side, không backend, dữ liệu lưu trong localStorage. Toàn bộ logic lõi được phủ unit test bằng Vitest.",
    role: "Developer",
    period: "2026",
    image: "/projects/placeholder.svg",
    tech: ["TypeScript", "React", "Vite", "Zustand", "BroadcastChannel", "Vitest"],
    links: {},
    featured: true,
  },
  {
    slug: "the-lucky-draw",
    name: "The Lucky Draw",
    tagline:
      "Game đua vịt trình chiếu trên màn hình lớn, dùng để bốc thăm trúng thưởng trong sự kiện.",
    description:
      "Game đua vịt xây dựng trên Canvas API, dùng làm hoạt động bốc thăm trúng thưởng tại sự kiện VisionX. Hỗ trợ danh sách hàng trăm người tham dự, có màn hình trình chiếu riêng đồng bộ với màn hình điều khiển, quản lý giải thưởng và lưu lịch sử trúng thưởng. Vòng đời cuộc đua chạy theo delta time để tốc độ đồng nhất trên mọi thiết bị. Dữ liệu người tham dự đồng bộ qua Google Sheets.",
    role: "Developer",
    period: "2025 – 2026",
    image: "/projects/placeholder.svg",
    tech: ["JavaScript", "Canvas API", "Web Audio API", "Google Apps Script"],
    links: {},
    featured: true,
  },
];
