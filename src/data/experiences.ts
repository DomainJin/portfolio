import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "VisionX Interactive",
    role: "Kỹ sư Điện tử — Phòng R&D",
    start: "10/2025",
    end: "Hiện tại",
    location: "Hóc Môn, TP. Hồ Chí Minh",
    highlights: [
      "Viết firmware ESP32 (C/C++) cho sản phẩm trưng bày chạy thật tại sự kiện: điều khiển van, động cơ và LED, có OTA, watchdog, unit test và kiểm thử trên thiết bị thật.",
      "Phát triển phần mềm sự kiện: hệ thống check-in quét mã, quay số trúng thưởng, game đua vịt — chạy trong sự kiện có hàng trăm khách.",
      "Thiết kế schematic và layout PCB trên EasyEDA cho chính các sản phẩm mình viết firmware: bo chủ ESP32 có tầng opto cách ly, bo điều khiển robot 5 kênh động cơ, loạt bo LED dùng driver PT4115.",
      "Lắp ráp bo bằng lò reflow và kiểm tra chức năng theo lô trước khi đưa vào sản phẩm.",
      "Truy lỗi bo mạch bằng oscilloscope và đồng hồ đo — đo dạng sóng, thời gian cạnh, chu kỳ xung — để tách lỗi thiết kế khỏi lỗi gia công; phần lớn lỗi đến từ khâu gia công tại nhà máy.",
      "Dựng khung cơ khí trên Rhino và xuất file gia công CNC / laser.",
    ],
    tech: ["EasyEDA", "Layout PCB", "Hàn reflow", "Oscilloscope", "Rhino", "ESP32", "C/C++"],
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
    role: "Kỹ thuật viên phần cứng (Part-time)",
    start: "01/2025",
    end: "09/2025",
    location: "TP. Hồ Chí Minh",
    highlights: [
      "Lắp ráp thiết bị y tế theo quy trình và kiểm tra chức năng từng máy trước khi bàn giao.",
      "Làm việc trong môi trường thiết bị y tế, nơi mỗi máy phải đạt đúng tiêu chí kiểm tra mới được xuất xưởng — rèn thói quen bám quy trình và ghi nhận kết quả đo.",
      "Phát hiện và xử lý lỗi lắp ráp phát sinh trong quá trình sản xuất.",
    ],
    tech: ["Thiết bị y tế", "Lắp ráp theo quy trình", "Kiểm tra chức năng"],
  },
  {
    company: "Công ty Cổ phần Khoa học Kỹ thuật Phương Hải",
    role: "Electronic Part-time",
    start: "06/2024",
    end: "08/2024",
    location: "TP. Hồ Chí Minh",
    highlights: [
      "Hàn mạch điện tử theo lô, đo kiểm và debug bo mạch trước khi xuất xưởng.",
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
