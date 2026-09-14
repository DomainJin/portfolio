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

- `avatar.svg` → ảnh chân dung thật (vuông, ≥800px). Nhớ sửa `avatar` trong `profile.ts`.
- `cv.pdf` → hiện là bản CV cũ, cần thay bằng CV mới.
- `certificates/iot-imic.pdf` → **39MB, quá nặng để deploy**. Cần nén hoặc thay bằng link verify online.
- `projects/placeholder.svg` → ảnh từng dự án (tỷ lệ 16:9, ≥1200px).
- `src/app/favicon.ico` → favicon riêng.

## Trước khi deploy

1. Đổi `https://example.com` thành domain thật trong `src/app/layout.tsx` (`metadataBase`) và `src/app/sitemap.ts`.
2. Deploy lên Vercel: import repo → Next.js được nhận diện tự động.
