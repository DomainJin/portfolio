# Portfolio

Portfolio cá nhân (Next.js 16 + TypeScript + Tailwind CSS 4), dùng để gắn link vào CV.

## Chạy

```bash
npm run dev     # http://localhost:3000
npm run build   # build production
```

## Điền nội dung

Toàn bộ nội dung nằm trong `src/data/` — sửa file, không cần đụng vào component.

| File | Nội dung |
| --- | --- |
| `src/data/profile.ts` | Tên, chức danh, tóm tắt, email, avatar, link CV, mạng xã hội |
| `src/data/experiences.ts` | Kinh nghiệm làm việc (timeline) |
| `src/data/projects.ts` | Dự án (card + trang chi tiết `/projects/[slug]`) |
| `src/data/certificates.ts` | Chứng chỉ |

Kiểu dữ liệu định nghĩa ở `src/data/types.ts`.

## Asset cần thay trong `public/`

- `avatar.jpg` → ảnh chân dung (gốc ở `asset/personal/avatar.png`).
- `cv.pdf` → hiện là bản CV cũ, cần thay bằng CV mới.
- `certificates/iot-imic.pdf` → đã gỡ bản 39MB; cần thêm bản nén (<2MB) hoặc ảnh JPG.
- `videos/` → video demo đã nén (H.264, không tiếng). Giữ mỗi file dưới ~10MB.
- `projects/placeholder.svg` → ảnh từng dự án (tỷ lệ 16:9, ≥1200px).
- `src/app/favicon.ico` → favicon riêng.

## Trước khi deploy

1. Domain: `https://portfolio.domainjin.io.vn` (đã cấu hình trong `layout.tsx` và `sitemap.ts`).
2. Deploy lên Vercel: import repo → Next.js được nhận diện tự động.
