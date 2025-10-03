# 🎯 QUICK START GUIDE - PEMBAGIAN TUGAS

## 📋 Ringkasan Super Cepat

Kamu adalah **ORANG 1**, **ORANG 2**, atau **ORANG 3**?

---

## 👤 ORANG 1 - Yang Mau Fokus di Landing Page

### 📁 Folder Kamu
```
pembagian-tugas/orang1-landing-page/
```

### 🎯 Tanggung Jawab
- Setup project (config files)
- **Halaman Beranda** (landing page utama)
- Header & Footer components
- NotFound page

### 📝 Files: ~30 files
- ✅ Config files (package.json, vite, tailwind, dll)
- ✅ 2 Pages: Beranda.tsx, NotFound.tsx
- ✅ 3 Components: Header, Footer, PackageCard
- ✅ 5 Images (hero + KFC + JCO)

### 🚀 Push Pertama
```bash
cd pembagian-tugas/orang1-landing-page
git init
git add .
git commit -m "feat: setup project foundation and landing page"
git checkout -b feature/landing-page
git remote add origin <repo-url>
git push origin feature/landing-page
```

### 📖 Detail
Baca: `orang1-landing-page/README-ORANG1.md`

---

## 👤 ORANG 2 - Yang Mau Fokus di Explore & Checkout

### 📁 Folder Kamu
```
pembagian-tugas/orang2-explore-checkout/
```

### 🎯 Tanggung Jawab
- **Halaman Jelajahi** (browse paket)
- **Halaman PaketDetail** (detail dengan gallery)
- **Halaman Checkout** (multi-step form)
- Data packages.ts

### 📝 Files: ~17 files
- ✅ 3 Pages: Jelajahi, PaketDetail, Checkout
- ✅ 1 Data file: packages.ts
- ✅ 13 UI Components (form, carousel, dialog, dll)

### 🚀 Push Kedua (setelah Orang 1)
```bash
# Pull dulu dari main
git checkout main
git pull origin main

cd pembagian-tugas/orang2-explore-checkout
git checkout -b feature/explore-checkout
git add .
git commit -m "feat: add explore, detail, and checkout pages"
git push origin feature/explore-checkout
```

### 📖 Detail
Baca: `orang2-explore-checkout/README-ORANG2.md`

---

## 👤 ORANG 3 - Yang Mau Fokus di User & Orders

### 📁 Folder Kamu
```
pembagian-tugas/orang3-user-orders/
```

### 🎯 Tanggung Jawab
- **Halaman Login**
- **Halaman Pesanan** (order history)
- **Halaman PesananDetail** (QR code besar)
- **Halaman Profil**
- Halaman Tentang & Bisnis

### 📝 Files: ~23 files
- ✅ 6 Pages: Login, Pesanan, PesananDetail, Profil, Tentang, Bisnis
- ✅ 2 Hooks: use-toast, use-mobile
- ✅ 15 UI Components (toast, table, calendar, dll)

### 🚀 Push Ketiga (setelah Orang 1)
```bash
# Pull dulu dari main
git checkout main
git pull origin main

cd pembagian-tugas/orang3-user-orders
git checkout -b feature/user-orders
git add .
git commit -m "feat: add authentication and order management"
git push origin feature/user-orders
```

### 📖 Detail
Baca: `orang3-user-orders/README-ORANG3.md`

---

## 🎓 Belum Pernah Push ke GitHub?

### Step-by-Step untuk Pemula

#### 1. Buat Repository di GitHub
- Login ke github.com
- Klik tombol "+" di kanan atas → "New repository"
- Nama: `goodbite-food-waste-app` (atau terserah)
- Public/Private: terserah
- **JANGAN** centang "Initialize with README"
- Klik "Create repository"

#### 2. Copy URL Repository
Setelah dibuat, akan muncul URL seperti:
```
https://github.com/username/goodbite-food-waste-app.git
```
Copy URL ini!

#### 3. ORANG 1 - Setup Repository (Hanya Orang 1 yang lakukan ini!)
```bash
# Masuk ke folder Orang 1
cd "c:\Kuliah\Semester 5\PRAK\Lab POPL\Projek4\pembagian-tugas\orang1-landing-page"

# Init git
git init

# Add semua files
git add .

# Commit
git commit -m "feat: setup project foundation and landing page"

# Buat branch main
git branch -M main

# Tambahkan remote (ganti <URL> dengan URL repository kalian!)
git remote add origin <URL-REPOSITORY-KALIAN>

# Push ke GitHub
git push -u origin main
```

#### 4. ORANG 2 & 3 - Clone Repository
```bash
# Clone repository (ganti <URL> dengan URL repository kalian!)
git clone <URL-REPOSITORY-KALIAN>
cd goodbite-food-waste-app

# ORANG 2
git checkout -b feature/explore-checkout
# Copy files dari folder orang2-explore-checkout ke sini
git add .
git commit -m "feat: add explore, detail, and checkout pages"
git push origin feature/explore-checkout

# ORANG 3
git checkout -b feature/user-orders
# Copy files dari folder orang3-user-orders ke sini
git add .
git commit -m "feat: add authentication and order management"
git push origin feature/user-orders
```

#### 5. Buat Pull Request
- Buka github.com/username/goodbite-food-waste-app
- Akan ada notifikasi "Compare & pull request"
- Klik tombol itu
- Tulis deskripsi singkat
- Klik "Create pull request"
- Tag teman untuk review

#### 6. Merge Pull Request
- Setelah di-review dan approved
- Klik "Merge pull request"
- Klik "Confirm merge"
- Done! ✅

---

## ⚠️ PENTING!

### Urutan Push HARUS:
```
1. ORANG 1 (setup) → merge ke main
2. ORANG 2 & 3 (bersamaan/setelah Orang 1)
```

### Jangan Lupa:
- ✅ Install dependencies: `npm install`
- ✅ Test lokal: `npm run dev`
- ✅ Check browser: `http://localhost:8081`
- ✅ Koordinasi di group chat

---

## 📞 Ada Masalah?

### Error: "git command not found"
Install Git dulu: https://git-scm.com/downloads

### Error: "npm command not found"
Install Node.js dulu: https://nodejs.org/

### Error: "failed to push"
```bash
# Pull dulu
git pull origin main

# Resolve conflicts jika ada
# Lalu push lagi
git push origin <branch-name>
```

### Error: "merge conflict"
1. Buka file yang conflict
2. Cari tanda `<<<<<<<`, `=======`, `>>>>>>>`
3. Edit manual, pilih code yang mana yang mau dipakai
4. Hapus tanda-tanda conflict
5. `git add .`
6. `git commit -m "fix: resolve merge conflict"`
7. `git push`

---

## 🎉 Selamat Berkontribusi!

**Remember:**
- Komunikasi adalah kunci
- Test sebelum push
- Review code teman
- Enjoy the process! 🚀

Baca README lengkap di: `pembagian-tugas/README.md`
