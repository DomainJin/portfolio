export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Firmware & IoT — mảng chính",
    items: [
      "C / C++",
      "ESP32 / ESP32-S3, STM32, PIC16F877A",
      "ESP-IDF, FreeRTOS, Arduino, PlatformIO",
      "I2C, SPI, UART, OneWire, RS485",
      "Wi-Fi, BLE, Ethernet W5500",
      "MQTT, HTTP, WebSocket, UDP / OSC, AWS IoT Core",
      "PWM, ADC, encoder, PID",
      "OTA, watchdog, unit test, tối ưu RAM / Flash",
    ],
  },
  {
    group: "Ứng dụng & Web",
    items: [
      "TypeScript, JavaScript, Python",
      "React, Next.js, Vite",
      "Node.js, Fastify, Flask",
      "PyQt6 (app desktop)",
      "WebSocket, SSE, REST",
      "PostgreSQL, Redis",
      "Docker, Nginx",
      "Git / GitHub, Vitest",
    ],
  },
  {
    group: "Cách làm việc",
    items: [
      "Dùng AI để tăng tốc viết code",
      "Nắm kiến trúc tổng thể hệ thống trước khi code",
      "Bám nguyên lý và cơ sở căn bản để kiểm chứng kết quả",
      "Kiểm tra bằng dữ liệu thật: hexdump, serial log, đo trên thiết bị",
      "Chia việc theo phase, refactor trước khi thêm tính năng",
    ],
  },
  {
    group: "Phần cứng — đang phát triển",
    items: [
      "EasyEDA: schematic, layout PCB 2 lớp, DRC, dựng 3D",
      "Đọc & tra datasheet",
      "Mạch nguồn, opto cách ly",
      "Driver động cơ, driver LED dòng không đổi",
      "Đọc sơ đồ: pull-up/down, chia áp",
    ],
  },
  {
    group: "Sản xuất & kiểm thử",
    items: [
      "Hàn reflow, hàn tay & sửa mạch",
      "Kiểm tra chức năng theo lô",
      "Oscilloscope: dạng sóng, thời gian cạnh, chu kỳ",
      "Đồng hồ đo",
      "Truy lỗi bo mạch từ nhà máy",
    ],
  },
  {
    group: "Cơ khí & gia công",
    items: ["Rhino 3D", "Xuất file CNC / laser", "Lắp ráp cơ – điện", "Đi dây & đấu nối tủ điện"],
  },
];
