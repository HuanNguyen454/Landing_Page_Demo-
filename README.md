# TuteClass Creative Classroom Landing

Landing page va trang Home dashboard cho san pham quan ly lop hoc them ca nhan cua TuteClass.

## Chay local

```bash
npm install
npm run dev
```

Mo:

- Landing: `http://127.0.0.1:5173/`
- Home: `http://127.0.0.1:5173/home.html`

Neu cong `5173` dang ban, Vite se hien cong khac trong terminal.

## Build

```bash
npm run build
```

Thu muc production se nam trong `dist/`.

## Deploy GitHub Pages

Repo da co workflow tai `.github/workflows/deploy.yml`.

Sau khi push len GitHub:

1. Vao repo tren GitHub.
2. Mo `Settings` -> `Pages`.
3. O `Build and deployment`, chon `Source: GitHub Actions`.
4. Push vao branch `main` hoac `master`.
5. Cho workflow `Deploy to GitHub Pages` chay xong, GitHub se hien URL Pages.

Vite dang dung `base: "./"` de asset CSS/JS/logo chay dung tren GitHub Pages project URL.
