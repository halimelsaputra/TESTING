# 🌿 STRATEGI BRANCH PER FITUR - GOODBITE PROJECT

## 📋 Overview
Pembagian tugas berdasarkan **fitur/modul** dengan **1 branch = 1 fitur**.  
Setiap orang bisa handle multiple branches, tapi **1 branch = 1 Pull Request**.

## ⚠️ PENTING: OOP UPDATE!
**Project sekarang pakai Hybrid OOP Architecture!**  
📖 Baca: **`../pembagian-tugas/OOP_UPDATE.md`** untuk detail perubahan.

**NEW Branch yang perlu dibuat:**
- `feat/oop-implementation` - Models & Services (Order, Package, OrderService, PackageService)

**Affected branches:**
- `feat/checkout-flow` - Sekarang pakai OrderService
- `feat/order-management` - Sekarang pakai OrderService
- `feat/order-detail-qr` - Sekarang pakai OrderService

---

## 🌳 Branch Strategy

```
main (protected)
  ↓
  ├─ feat/project-setup           → ORANG 1
  ├─ feat/components-base         → ORANG 1
  ├─ feat/landing-page            → ORANG 1
  ├─ feat/header-footer           → ORANG 1
  │
  ├─ feat/package-data            → ORANG 2
  ├─ feat/explore-page            → ORANG 2
  ├─ feat/package-detail          → ORANG 2
  ├─ feat/checkout-flow           → ORANG 2
  │
  ├─ feat/auth-login              → ORANG 3
  ├─ feat/order-management        → ORANG 3
  ├─ feat/order-detail-qr         → ORANG 3
  ├─ feat/profile-page            → ORANG 3
  └─ feat/info-pages              → ORANG 3
```

---

## 👥 PEMBAGIAN BRANCH PER ORANG

### 👤 **ORANG 1 - Foundation & Landing** (4 branches)

#### 🌿 **Branch 1: `feat/project-setup`**
**Push Pertama! (Prioritas Tertinggi)**

**Files:**
```
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── components.json
├── eslint.config.js
├── index.html
├── README.md
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   └── lib/
│       └── utils.ts
```

**Commit Message:**
```bash
git commit -m "feat: initial project setup with Vite + React + TypeScript

- Setup Vite configuration
- Configure Tailwind CSS and PostCSS
- Add TypeScript configurations
- Setup shadcn/ui components
- Add ESLint configuration
- Create project structure"
```

---

#### 🌿 **Branch 2: `feat/components-base`**
**Dependencies:** Harus setelah `feat/project-setup` merged

**Files:**
```
src/
├── components/
│   ├── PackageCard.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── separator.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── ... (semua UI components dari shadcn)
```

**Commit Message:**
```bash
git commit -m "feat: add base UI components

- Add shadcn/ui components (button, card, badge, etc)
- Create PackageCard component for displaying packages
- Setup component library structure"
```

---

#### 🌿 **Branch 3: `feat/header-footer`**
**Dependencies:** Harus setelah `feat/components-base` merged

**Files:**
```
src/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── App.tsx (routing setup)
├── App.css
```

**Commit Message:**
```bash
git commit -m "feat: add header and footer components

- Create responsive Header with navigation
- Add Footer component with links and info
- Setup React Router in App.tsx
- Create basic routing structure"
```

---

#### 🌿 **Branch 4: `feat/landing-page`**
**Dependencies:** Harus setelah `feat/header-footer` merged

**Files:**
```
src/
├── pages/
│   ├── Beranda.tsx
│   └── NotFound.tsx
├── img/
│   ├── gambar_dashboard_atas1.jpg
│   ├── gambar_dashboard_atas2.jpg
│   ├── gambar_dashboard_atas3.jpg
│   ├── KfC.jpg
│   └── J.co.jpg
```

**Commit Message:**
```bash
git commit -m "feat: create landing page (Beranda)

- Add hero section with carousel
- Add featured packages section
- Add partner logos (KFC, JCO)
- Create 404 Not Found page
- Add hero images"
```

---

### 👤 **ORANG 2 - Explore & Checkout** (4 branches)

#### 🌿 **Branch 5: `feat/package-data`**
**Dependencies:** Harus setelah `feat/project-setup` merged

**Files:**
```
src/
└── data/
    └── packages.ts
```

**Commit Message:**
```bash
git commit -m "feat: add package data source

- Create packages.ts with package interface
- Add 8-10 sample packages data
- Include package details (name, price, location, etc)"
```

---

#### 🌿 **Branch 6: `feat/explore-page`**
**Dependencies:** Harus setelah `feat/package-data` dan `feat/components-base` merged

**Files:**
```
src/
└── pages/
    └── Jelajahi.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create explore/browse packages page

- Add package listing with grid layout
- Implement filter by category
- Add search functionality
- Add sorting options
- Use PackageCard component for display"
```

---

#### 🌿 **Branch 7: `feat/package-detail`**
**Dependencies:** Harus setelah `feat/package-data` dan `feat/components-base` merged

**Files:**
```
src/
└── pages/
    └── PaketDetail.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create package detail page

- Add image carousel/gallery
- Show package information and description
- Add countdown timer for pickup time
- Implement review and rating section
- Embed Google Maps for location
- Add booking button with sticky card"
```

---

#### 🌿 **Branch 8: `feat/checkout-flow`**
**Dependencies:** Harus setelah `feat/package-data` dan `feat/components-base` merged

**Files:**
```
src/
└── pages/
    └── Checkout.tsx
```

**Commit Message:**
```bash
git commit -m "feat: implement checkout flow

- Create multi-step form (info, payment, confirmation)
- Add form validation
- Implement order summary
- Generate QR code for booking
- Save order to localStorage
- Add confetti animation on success"
```

---

### 👤 **ORANG 3 - Auth & Orders** (5 branches)

#### 🌿 **Branch 9: `feat/auth-login`**
**Dependencies:** Harus setelah `feat/components-base` merged

**Files:**
```
src/
└── pages/
    └── Login.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create login and authentication page

- Add login form with validation
- Create register form
- Add toggle between login/register
- Implement form validation
- Add social login buttons (UI only)"
```

---

#### 🌿 **Branch 10: `feat/order-management`**
**Dependencies:** Harus setelah `feat/package-data` dan `feat/components-base` merged

**Files:**
```
src/
├── pages/
│   └── Pesanan.tsx
└── hooks/
    ├── use-toast.ts
    └── use-mobile.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create order management page

- Add order history listing
- Implement stats cards (total, active, completed, savings)
- Create tabbed interface (Semua, Aktif, Selesai)
- Add QR code preview for each order
- Show countdown timer for active orders
- Calculate user statistics"
```

---

#### 🌿 **Branch 11: `feat/order-detail-qr`**
**Dependencies:** Harus setelah `feat/order-management` merged

**Files:**
```
src/
└── pages/
    └── PesananDetail.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create order detail with QR code

- Display large QR code (280px) for pickup
- Show order timeline with progress
- Add download QR functionality
- Implement pickup confirmation
- Add rating modal after confirmation
- Show impact stats (kg saved, CO2 reduced)"
```

---

#### 🌿 **Branch 12: `feat/profile-page`**
**Dependencies:** Harus setelah `feat/components-base` merged

**Files:**
```
src/
└── pages/
    └── Profil.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create user profile page

- Display user information
- Add edit profile functionality
- Show notification preferences
- Display favorite locations
- Show achievement badges
- Display total impact statistics
- Add logout functionality"
```

---

#### 🌿 **Branch 13: `feat/info-pages`**
**Dependencies:** Harus setelah `feat/components-base` merged

**Files:**
```
src/
└── pages/
    ├── Tentang.tsx
    └── Bisnis.tsx
```

**Commit Message:**
```bash
git commit -m "feat: create info pages (About and Business)

- Create Tentang page with platform info
- Add mission and vision section
- Create Bisnis page for partner registration
- Add partner benefits section
- Implement business registration form
- Add testimonials and FAQ"
```

---

## 📊 Summary Table

| Branch # | Branch Name | PIC | Dependencies | Files | Priority |
|----------|-------------|-----|--------------|-------|----------|
| 1 | `feat/project-setup` | Orang 1 | None | 15 | 🔴 Critical |
| 2 | `feat/components-base` | Orang 1 | Branch 1 | 30+ | 🔴 Critical |
| 3 | `feat/header-footer` | Orang 1 | Branch 2 | 3 | 🟠 High |
| 4 | `feat/landing-page` | Orang 1 | Branch 3 | 7 | 🟠 High |
| 5 | `feat/package-data` | Orang 2 | Branch 1 | 1 | 🔴 Critical |
| 6 | `feat/explore-page` | Orang 2 | Branch 2, 5 | 1 | 🟡 Medium |
| 7 | `feat/package-detail` | Orang 2 | Branch 2, 5 | 1 | 🟡 Medium |
| 8 | `feat/checkout-flow` | Orang 2 | Branch 2, 5 | 1 | 🟡 Medium |
| 9 | `feat/auth-login` | Orang 3 | Branch 2 | 1 | 🟡 Medium |
| 10 | `feat/order-management` | Orang 3 | Branch 2, 5 | 3 | 🟡 Medium |
| 11 | `feat/order-detail-qr` | Orang 3 | Branch 10 | 1 | 🟢 Low |
| 12 | `feat/profile-page` | Orang 3 | Branch 2 | 1 | 🟢 Low |
| 13 | `feat/info-pages` | Orang 3 | Branch 2 | 2 | 🟢 Low |

---

## 🔄 Workflow Sequence

### **Week 1: Foundation (Orang 1)**
```
Day 1-2: Branch 1 (project-setup) → Merge
Day 2-3: Branch 2 (components-base) → Merge
Day 3-4: Branch 3 (header-footer) → Merge
Day 4-5: Branch 4 (landing-page) → Merge
```

### **Week 2: Core Features (Parallel)**
**Orang 2:**
```
Day 1: Branch 5 (package-data) → Merge
Day 2-3: Branch 6 (explore-page) → Merge
Day 3-4: Branch 7 (package-detail) → Merge
Day 4-5: Branch 8 (checkout-flow) → Merge
```

**Orang 3:**
```
Day 1-2: Branch 9 (auth-login) → Merge
Day 2-3: Branch 10 (order-management) → Merge
Day 3-4: Branch 11 (order-detail-qr) → Merge
Day 4-5: Branch 12 (profile-page) → Merge
```

### **Week 3: Polish**
```
Orang 3: Branch 13 (info-pages) → Merge
All: Testing, bug fixes, polish
```

---

## 🚀 Git Commands Template

### **Untuk Setiap Branch:**

```bash
# 1. Update main branch
git checkout main
git pull origin main

# 2. Buat branch baru dari main
git checkout -b feat/nama-fitur

# 3. Copy files yang dibutuhkan
# [Do your work here...]

# 4. Add & Commit
git add .
git commit -m "feat: deskripsi fitur

- Detail perubahan 1
- Detail perubahan 2
- Detail perubahan 3"

# 5. Push branch
git push origin feat/nama-fitur

# 6. Buat Pull Request di GitHub
# Review → Approve → Merge

# 7. Delete branch setelah merge (optional)
git branch -d feat/nama-fitur
git push origin --delete feat/nama-fitur
```

---

## 📋 Checklist Per Branch

Sebelum buat Pull Request, pastikan:

- [ ] Code sudah di-test lokal (`npm run dev`)
- [ ] Tidak ada error compile
- [ ] Tidak ada warning ESLint
- [ ] Code sudah di-format (Prettier)
- [ ] Commit message descriptive
- [ ] Branch updated dari main terbaru
- [ ] Tidak ada merge conflict
- [ ] File yang tidak perlu sudah di-exclude (.env, node_modules, dll)

---

## 🎯 Pull Request Template

```markdown
## 🌿 Branch: feat/nama-fitur

### 📝 Description
[Jelaskan fitur yang ditambahkan]

### ✨ Changes
- [ ] Change 1
- [ ] Change 2
- [ ] Change 3

### 📸 Screenshots (optional)
[Tambahkan screenshot jika ada perubahan UI]

### 🧪 Testing
- [ ] Tested on Chrome
- [ ] Tested on mobile view
- [ ] No console errors
- [ ] All features working

### 🔗 Dependencies
Depends on: #PR_NUMBER (jika ada)

### 👀 Reviewers
@username1 @username2
```

---

## 💡 Best Practices

### ✅ DO's
- **1 branch = 1 fitur** (fokus, jangan campur)
- **Commit sering** dengan message yang jelas
- **Pull from main** sebelum start branch baru
- **Test sebelum push**
- **Review code** orang lain
- **Resolve conflicts** segera
- **Update PR description** jika ada perubahan

### ❌ DON'Ts
- Jangan push langsung ke `main`
- Jangan merge PR sendiri tanpa review
- Jangan commit file yang tidak perlu (node_modules, .env)
- Jangan bikin branch terlalu besar (split jika perlu)
- Jangan tunggu terlalu lama untuk merge (avoid big conflicts)

---

## 🎓 Git Tips

### Useful Commands

```bash
# Check current branch
git branch

# Check status
git status

# See commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- <file>

# Update branch from main
git checkout feat/my-branch
git merge main

# Squash commits (cleanup history)
git rebase -i HEAD~3
```

### Resolve Merge Conflicts

```bash
# 1. Update from main
git checkout feat/my-branch
git merge main

# 2. Jika ada conflict, edit file manually
# Cari marker: <<<<<<<, =======, >>>>>>>

# 3. After resolving
git add .
git commit -m "fix: resolve merge conflicts"
git push
```

---

## 📞 Koordinasi Tim

### Daily Standup (5-10 menit)
- Kemarin kerja di branch apa?
- Hari ini mau kerja di branch apa?
- Ada blocker/masalah?

### Code Review
- Review minimal 1 PR setiap hari
- Kasih feedback konstruktif
- Approve jika sudah OK
- Request changes jika ada issue

### Communication
- Update di group chat jika:
  - Branch baru dibuat
  - PR ready for review
  - PR merged
  - Ada blocker yang butuh bantuan

---

## 🏆 Success Metrics

Project sukses jika:
- ✅ Semua 13 branches sudah merged
- ✅ Tidak ada critical bug
- ✅ Code coverage > 80% (optional)
- ✅ Website bisa run production
- ✅ Semua fitur berfungsi
- ✅ Responsive di semua device
- ✅ Performance bagus (load < 3s)
- ✅ Commit history clean dan descriptive

---

**Good luck with your branching strategy! 🌿🚀**
