# 📁 PEMBAGIAN TUGAS GITHUB - GOODBITE PROJECT

Folder ini berisi pembagian file untuk 3 orang developer agar semua terlihat berkontribusi dalam pengembangan website GoodBite.

---

## 📂 Struktur Pembagian

```
pembagian-tugas/
├── orang1-landing-page/          # Setup + Landing Page
├── orang2-explore-checkout/      # Browse + Detail + Checkout
└── orang3-user-orders/           # Auth + Orders + Profile + Info Pages
```

---

## 👥 Pembagian Detail

### 👤 **ORANG 1: FRONTEND FOUNDATION & LANDING PAGE**
**📁 Folder:** `orang1-landing-page/`  
**🎯 Fokus:** Setup infrastruktur project dan halaman utama

**Files (Total: ~30 files):**
- ✅ Root config files (package.json, vite.config.ts, tailwind, tsconfig, dll)
- ✅ src/ (main.tsx, App.tsx, index.css, dll)
- ✅ **Halaman: Beranda.tsx, NotFound.tsx**
- ✅ Components: Header.tsx, Footer.tsx, PackageCard.tsx
- ✅ UI Components: button, card, badge, separator
- ✅ lib/utils.ts
- ✅ Images (5 gambar hero + KFC + JCO)
- ✅ public/ (favicon, placeholder, robots.txt)

**Kompleksitas:** ⭐⭐⭐ (Medium - banyak setup)

**README:** Baca `orang1-landing-page/README-ORANG1.md`

---

### 👤 **ORANG 2: EXPLORE & DETAIL PAGES**
**📁 Folder:** `orang2-explore-checkout/`  
**🎯 Fokus:** User journey dari explore → detail → checkout

**Files (Total: ~17 files):**
- ✅ **Halaman: Jelajahi.tsx, PaketDetail.tsx, Checkout.tsx**
- ✅ Data: packages.ts (data paket makanan)
- ✅ UI Components: input, label, select, textarea, checkbox, radio-group, form, tabs, dialog, alert-dialog, carousel, accordion, avatar (13 components)

**Kompleksitas:** ⭐⭐⭐⭐ (High - form handling, gallery, multi-step)

**README:** Baca `orang2-explore-checkout/README-ORANG2.md`

---

### 👤 **ORANG 3: USER MANAGEMENT & ORDERS**
**📁 Folder:** `orang3-user-orders/`  
**🎯 Fokus:** Autentikasi, order management, profil, info pages

**Files (Total: ~23 files):**
- ✅ **Halaman: Login.tsx, Pesanan.tsx, PesananDetail.tsx, Profil.tsx, Tentang.tsx, Bisnis.tsx**
- ✅ Hooks: use-toast.ts, use-mobile.tsx
- ✅ UI Components: toast, toaster, alert, sheet, dropdown-menu, popover, calendar, command, scroll-area, skeleton, progress, slider, switch, table (15 components)

**Kompleksitas:** ⭐⭐⭐⭐ (High - QR code, localStorage, stats)

**README:** Baca `orang3-user-orders/README-ORANG3.md`

---

## 🔄 Urutan Push yang Disarankan

### **1️⃣ ORANG 1 - Push Pertama** (Prioritas Tertinggi)
```bash
cd orang1-landing-page
git init
git add .
git commit -m "feat: setup project foundation and landing page"
git checkout -b feature/landing-page
git remote add origin <repository-url>
git push origin feature/landing-page
# Buat Pull Request di GitHub
```

**Alasan:** File setup dan components dibutuhkan oleh Orang 2 & 3.

---

### **2️⃣ ORANG 2 - Push Kedua**
```bash
# Pull changes dari main (setelah Orang 1 merge)
git checkout main
git pull origin main

cd orang2-explore-checkout
git checkout -b feature/explore-checkout
git add .
git commit -m "feat: add explore, detail, and checkout pages"
git push origin feature/explore-checkout
# Buat Pull Request di GitHub
```

**Alasan:** Butuh Header, Footer, PackageCard dari Orang 1.

---

### **3️⃣ ORANG 3 - Push Ketiga** (atau bersamaan dengan Orang 2)
```bash
# Pull changes dari main (setelah Orang 1 merge)
git checkout main
git pull origin main

cd orang3-user-orders
git checkout -b feature/user-orders
git add .
git commit -m "feat: add authentication and order management"
git push origin feature/user-orders
# Buat Pull Request di GitHub
```

**Alasan:** Butuh Header, Footer dari Orang 1, dan packages.ts dari Orang 2.

---

## 📊 Summary Statistik

| Orang | Pages | Components | Config | Total Files | Baris Code* |
|-------|-------|------------|--------|-------------|-------------|
| **Orang 1** | 2 | 7 | 11 | ~30 | ~1,200 |
| **Orang 2** | 3 | 13 | 1 | ~17 | ~1,500 |
| **Orang 3** | 6 | 17 | 0 | ~23 | ~2,000 |
| **TOTAL** | 11 | 37 | 12 | ~70 | ~4,700 |

*Estimasi baris code (termasuk comments dan whitespace)

---

## 🎯 Koordinasi Antar Tim

### Dependencies Flow
```
Orang 1 (Setup)
    ↓
    ├─→ Orang 2 (butuh Header, Footer, PackageCard, UI basics)
    └─→ Orang 3 (butuh Header, Footer, UI basics)
         ↑
         └─ Orang 2 (packages.ts, localStorage format)
```

### Shared Components
- **Header.tsx** - Dipakai semua halaman (kecuali PaketDetail, Checkout, PesananDetail)
- **Footer.tsx** - Dipakai semua halaman
- **PackageCard.tsx** - Dipakai di Beranda (Orang 1) dan Jelajahi (Orang 2)
- **packages.ts** - Data paket dipakai di banyak halaman
- **utils.ts** - Utility functions (cn function untuk Tailwind)

### LocalStorage Format (PENTING!)
**Key:** `goodbite_orders`  
**Format:**
```json
[
  {
    "orderId": "ORD-1234567890",
    "packageId": "1",
    "packageName": "Paket Roti Bakar",
    "storeName": "Roti Bakar 88",
    "location": "Jakarta Selatan",
    "price": 15000,
    "originalValue": 45000,
    "pickupTime": "18:00 - 20:00",
    "customerName": "John Doe",
    "customerPhone": "08123456789",
    "orderDate": "2025-10-03T10:30:00",
    "status": "active",
    "qrCode": "data:image/png;base64,..."
  }
]
```

**Status Values:**
- `"active"` - Pesanan aktif, belum diambil
- `"completed"` - Pesanan sudah diambil

---

## 💡 Tips Kolaborasi

### ✅ DO's
- **Komunikasi:** Koordinasi via WhatsApp/Discord untuk update progress
- **Commit Messages:** Gunakan format yang jelas (feat:, fix:, docs:, dll)
- **Branch Naming:** `feature/nama-fitur` atau `fix/nama-bug`
- **Pull Request:** Review code satu sama lain sebelum merge
- **Testing:** Test semua fitur sebelum push
- **Documentation:** Update README jika ada perubahan besar

### ❌ DON'Ts
- Jangan edit file yang bukan tanggung jawabmu
- Jangan merge PR sendiri tanpa review
- Jangan push ke `main` branch langsung
- Jangan hardcode data, gunakan packages.ts
- Jangan lupa sync dengan main sebelum mulai coding

---

## 🔧 Setup Awal (Untuk Semua Orang)

### 1. Clone Repository (setelah Orang 1 push)
```bash
git clone <repository-url>
cd goodbite-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open Browser
```
http://localhost:8081
```

---

## 📝 Checklist Kolaborasi

### Before Push
- [ ] Code sudah di-test lokal
- [ ] Tidak ada error compile
- [ ] Responsive di mobile & desktop
- [ ] Sudah pull latest dari main
- [ ] Commit message descriptive
- [ ] README update (jika perlu)

### After Push
- [ ] Buat Pull Request di GitHub
- [ ] Tag reviewer (teman satu tim)
- [ ] Tunggu approval minimal 1 orang
- [ ] Resolve conflicts jika ada
- [ ] Merge setelah approved

---

## 🎓 Learning Resources

### Git Commands
```bash
# Clone
git clone <url>

# Create branch
git checkout -b feature/nama-fitur

# Add files
git add .

# Commit
git commit -m "feat: deskripsi perubahan"

# Push
git push origin feature/nama-fitur

# Pull latest
git pull origin main

# Check status
git status

# View branches
git branch
```

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- GitLens

---

## 📞 Kontak & Support

Jika ada masalah atau pertanyaan:
1. **Check README** di folder masing-masing
2. **Tanya di group chat** tim
3. **Review kode** orang lain untuk belajar
4. **Google/Stack Overflow** untuk error spesifik

---

## 🏆 Success Criteria

Project dianggap sukses jika:
- ✅ Semua 3 orang sudah push ke GitHub
- ✅ Semua Pull Request di-merge ke main
- ✅ Website bisa run tanpa error
- ✅ Semua fitur utama berfungsi:
  - Landing page menarik
  - Browse & filter paket
  - Detail paket dengan gallery
  - Checkout flow lancar
  - Order management dengan QR code
  - Login & profile
- ✅ Responsive di mobile & desktop
- ✅ GitHub commit history terlihat kontribusi 3 orang

---

**Good luck team! 🚀🎉**

*Let's build an amazing food waste reduction platform together!*
