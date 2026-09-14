import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "VisionX Interactive",
    role: "Kỹ sư Điện tử / IoT — Phòng R&D",
    start: "10/2025",
    end: "Hiện tại",
    location: "Hóc Môn, TP. Hồ Chí Minh",
    highlights: [
      "Nghiên cứu, thiết kế, sản xuất và test các bo mạch cơ điện tử cho sản phẩm tương tác: thiết kế schematic và layout PCB trên EasyEDA, kiểm tra DRC, dựng mô hình 3D và theo dõi tới khâu gia công.",
      "Thiết kế bo điều khiển Robot Mecanum trên nền ESP32-S3: 5 kênh driver động cơ có encoder phản hồi, tầng opto cách ly và khối nguồn riêng.",
      "Thiết kế loạt bo mạch LED cho sản phẩm trưng bày: LED Cube, LED Curtain, LED Fan và bo LED driver dòng không đổi dùng PT4115.",
      "Lập trình nhúng cho firmware điều khiển và tích hợp giao tiếp có dây / không dây giữa thiết bị và ứng dụng.",
      "Phát triển ứng dụng web cho các hoạt động sự kiện của công ty (quay số trúng thưởng, game đua vịt, hệ thống check-in).",
      "Khắc phục lỗi bo mạch trong quá trình sản xuất và trước khi bàn giao.",
    ],
    tech: [
      "EasyEDA",
      "Thiết kế PCB",
      "ESP32-S3",
      "STM32",
      "PIC16F877A",
      "C/C++",
      "TypeScript",
      "React",
    ],
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
