export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Firmware & IoT",
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
    group: "Thiết kế phần cứng",
    items: [
      "EasyEDA (schematic, layout, DRC, 3D)",
      "Đọc & tra datasheet",
      "Chọn và thay thế linh kiện",
      "Phân tách analog – power – digital",
      "Mạch nguồn nhiều tầng lọc",
      "Opto cách ly điều khiển / công suất",
      "Driver động cơ, driver LED dòng không đổi",
      "Thiết kế hướng tới sản xuất (DFM)",
    ],
  },
  {
    group: "Sản xuất & kiểm thử bo mạch",
    items: [
      "Hàn reflow nhiều vùng nhiệt",
      "Hàn tay & sửa mạch",
      "Kiểm tra chức năng theo lô",
      "Oscilloscope (dạng sóng, thời gian cạnh, chu kỳ)",
      "Đồng hồ đo",
      "Truy lỗi bo mạch từ nhà máy",
      "Tháo máy & phân tích bo có sẵn",
    ],
  },
  {
    group: "Cơ khí & gia công",
    items: ["Rhino 3D", "Xuất file CNC / laser", "Lắp ráp cơ – điện", "Đi dây & đấu nối tủ điện"],
  },
];
