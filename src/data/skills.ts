export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Firmware & Vi điều khiển",
    items: ["C", "C++", "ESP32 / ESP32-S3", "ESP-IDF", "FreeRTOS", "Arduino framework", "PlatformIO", "STM32", "PIC16F877A", "Raspberry Pi"],
  },
  {
    group: "Giao tiếp & Giao thức",
    items: ["I2C", "SPI", "UART", "OneWire", "Modbus RS485", "BLE", "Wi-Fi", "Ethernet W5500", "WebSocket", "UDP / OSC", "MQTT", "AWS IoT Core"],
  },
  {
    group: "Điều khiển & Ngoại vi",
    items: ["PID + feedforward", "ISR", "PWM", "ADC", "Encoder", "Động học omni / mecanum", "IMU", "Van solenoid", "SD card"],
  },
  {
    group: "Phần cứng & PCB",
    items: [
      "EasyEDA",
      "Rhino 3D (CNC / laser)",
      "Đọc schematic",
      "Layout PCB",
      "Phân tách analog – power – digital",
      "Opto cách ly",
      "Mạch nguồn",
      "Hàn mạch & đo kiểm",
      "Debug bo mạch",
    ],
  },
  {
    group: "Độ tin cậy firmware",
    items: ["OTA dual-partition", "Task watchdog", "Unit test (Unity)", "Test trên phần cứng thật", "Tối ưu RAM / Flash"],
  },
  {
    group: "Xử lý tín hiệu & AI",
    items: ["OpenCV", "YOLO (Ultralytics)", "TensorFlow", "Xử lý ảnh", "Phân tích dữ liệu thực nghiệm"],
  },
  {
    group: "Phần mềm & Công cụ",
    items: ["TypeScript", "React", "Node.js", "Python", "PyQt6", "Git / GitHub", "Docker", "Vitest"],
  },
];
