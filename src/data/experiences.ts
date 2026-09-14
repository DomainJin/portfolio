import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "VisionX Interactive",
    role: "Kỹ sư Điện tử / IoT — Phòng R&D",
    start: "10/2025",
    end: "Hiện tại",
    location: "Hóc Môn, TP. Hồ Chí Minh",
    highlights: [
      "Viết firmware ESP32 cho màn nước solenoid chạy show SECC (2 dàn 4m): SPI 74HC595, phát cue từ SD card theo timestamp, WebSocket, OTA dual-partition, task watchdog, unit test trên PC.",
      "Tối ưu firmware màn nước: gỡ các module không cần cho show, đưa Flash từ 85,2% xuống 45,1% và RAM từ 34,0% xuống 29,3%; phát hiện lỗi timeout có thể chặn main loop ~16 phút.",
      "Viết firmware robot trưng bày Single Cube: đọc encoder bằng ISR, PID có feedforward, động học omni 3 bánh / mecanum 4 bánh, IMU và la bàn qua I2C, điều khiển qua UDP/OSC.",
      "Thiết kế schematic và PCB trên EasyEDA: bo chủ ESP32 có opto cách ly cho Cube, bo điều khiển Robot Mecanum 5 kênh động cơ, loạt bo LED dùng driver PT4115.",
      "Dựng khung cơ khí trên Rhino và xuất file gia công CNC / laser cho sản phẩm.",
      "Phát triển phần mềm cho sự kiện: hệ thống check-in quét mã, quay số trúng thưởng, game đua vịt.",
    ],
    tech: ["ESP32", "C/C++", "SPI", "I2C", "PID", "OTA", "EasyEDA", "Rhino", "Python", "TypeScript"],
  },
  {
    company: "IMIC Technology",
    role: "Học viên khóa Lập trình nhúng",
    start: "07/2025",
    end: "10/2025",
    location: "TP. Hồ Chí Minh",
    highlights: [
      "Hoàn thành các học phần Lập trình C/C++, Embedded Systems trên STM32F411VET6 Discovery và Embedded IoT trên ESP32.",
      "Thực hành firmware điều khiển Digital I/O, ADC, cảm biến và kết nối Wi-Fi.",
      "Triển khai giao tiếp IoT qua TCP/IP, UDP, HTTP, MQTT và tích hợp AWS IoT Core.",
    ],
    tech: ["C", "C++", "STM32", "ESP32", "MQTT", "AWS IoT Core"],
  },
  {
    company: "ITR VN",
    role: "Hardware Part-time",
    start: "01/2025",
    end: "09/2025",
    location: "TP. Hồ Chí Minh",
    highlights: [
      "Lắp ráp và kiểm tra chức năng thiết bị y tế trước khi bàn giao.",
    ],
    tech: ["Thiết bị y tế", "Kiểm thử phần cứng"],
  },
  {
    company: "Công ty Cổ phần Khoa học Kỹ thuật Phương Hải",
    role: "Electronic Part-time",
    start: "06/2024",
    end: "08/2024",
    location: "TP. Hồ Chí Minh",
    highlights: [
      "Hàn mạch điện tử, kiểm tra và debug bo mạch trước khi xuất xưởng.",
    ],
    tech: ["Hàn mạch", "Debug bo mạch"],
  },
  {
    company: "Công ty Thang máy Phúc An",
    role: "Thực tập kỹ thuật",
    start: "06/2023",
    end: "08/2023",
    location: "TP. Hồ Chí Minh",
    highlights: ["Bảo trì và đi dây tủ điện điều khiển thang máy."],
    tech: ["Tủ điện", "Bảo trì"],
  },
];
