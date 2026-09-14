export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Firmware & Vi điều khiển",
    items: ["C", "C++", "ESP32 / ESP32-S3", "ESP8266", "STM32", "PIC16F877A", "Raspberry Pi", "Arduino"],
  },
  {
    group: "Giao tiếp & Giao thức",
    items: ["I2C", "SPI", "UART", "OneWire", "Modbus RS485", "Wi-Fi", "MQTT", "TCP/IP", "HTTP"],
  },
  {
    group: "Điều khiển & Ngoại vi",
    items: ["PID", "PWM", "ADC", "Encoder", "Driver động cơ", "Cảm biến nhiệt độ", "LCD / LED display"],
  },
  {
    group: "Phần cứng & PCB",
    items: [
      "EasyEDA",
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
    group: "Xử lý tín hiệu & AI",
    items: ["OpenCV", "YOLO (Ultralytics)", "TensorFlow", "Xử lý ảnh", "Phân tích dữ liệu thực nghiệm"],
  },
  {
    group: "Phần mềm & Công cụ",
    items: ["TypeScript", "React", "Node.js", "Python", "PyQt6", "Git / GitHub", "Docker", "Vitest"],
  },
];
