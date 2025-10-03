# 👤 ORANG 1 - FOUNDATION & LANDING PAGE

## 🎯 Tanggung Jawab
Membangun **fondasi project** dan **landing page**

## 🌿 Branches (4 branches total)

---

## 1️⃣ Branch: `feat/project-setup` 
**⚡ PUSH PERTAMA! PRIORITAS TERTINGGI!**

### 📦 Files to Include
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
└── src/
    ├── main.tsx
    ├── index.css
    ├── vite-env.d.ts
    └── lib/
        └── utils.ts
```

### 🚀 Git Commands
```bash
# Dari main project folder
cd "c:\Kuliah\Semester 5\PRAK\Lab POPL\Projek4"

# Create branch
git checkout -b feat/project-setup

# Add files
git add package.json package-lock.json vite.config.ts tsconfig*.json
git add tailwind.config.ts postcss.config.js components.json eslint.config.js
git add index.html README.md .gitignore
git add public/ src/main.tsx src/index.css src/vite-env.d.ts src/lib/

# Commit
git commit -m "feat: initial project setup with Vite + React + TypeScript

- Setup Vite configuration
- Configure Tailwind CSS and PostCSS
- Add TypeScript configurations (tsconfig.json, tsconfig.app.json, tsconfig.node.json)
- Setup shadcn/ui component library (components.json)
- Add ESLint configuration for code quality
- Create project structure (src/, public/)
- Add utility functions (lib/utils.ts)
- Configure entry points (main.tsx, index.html)"

# Push
git push -u origin feat/project-setup
```

### ✅ Checklist
- [ ] `npm install` berjalan tanpa error
- [ ] `npm run dev` bisa start development server
- [ ] Tailwind CSS loaded (test dengan class di main.tsx)
- [ ] TypeScript tidak ada error
- [ ] File `.gitignore` sudah exclude node_modules, dist, .env

---

## 2️⃣ Branch: `feat/components-base`
**Dependency:** Harus setelah Branch 1 merged

### 📦 Files to Include
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
│       ├── select.tsx
│       ├── textarea.tsx
│       ├── checkbox.tsx
│       ├── radio-group.tsx
│       ├── form.tsx
│       ├── tabs.tsx
│       ├── dialog.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── carousel.tsx
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── use-toast.ts
│       ├── sheet.tsx
│       ├── dropdown-menu.tsx
│       ├── popover.tsx
│       ├── calendar.tsx
│       ├── command.tsx
│       ├── scroll-area.tsx
│       ├── skeleton.tsx
│       ├── progress.tsx
│       ├── slider.tsx
│       ├── switch.tsx
│       └── table.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch from main
git checkout -b feat/components-base

# Add files
git add src/components/

# Commit
git commit -m "feat: add base UI components library

- Add shadcn/ui components collection (button, card, badge, etc)
- Create PackageCard component for displaying package items
- Add form components (input, label, select, textarea, checkbox, radio)
- Add dialog and modal components (dialog, alert-dialog, sheet)
- Add data display components (table, carousel, accordion, avatar)
- Add feedback components (toast, alert, progress, skeleton)
- Add navigation components (tabs, dropdown-menu, popover, command)
- Setup component library structure"

# Push
git push -u origin feat/components-base
```

### ✅ Checklist
- [ ] Semua UI components tidak ada import error
- [ ] PackageCard component bisa render dengan sample data
- [ ] Components bisa di-import dari `@/components/ui/`
- [ ] Tailwind classes di components berfungsi

---

## 3️⃣ Branch: `feat/header-footer`
**Dependency:** Harus setelah Branch 2 merged

### 📦 Files to Include
```
src/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── App.tsx
└── App.css
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/header-footer

# Add files
git add src/components/Header.tsx src/components/Footer.tsx
git add src/App.tsx src/App.css

# Commit
git commit -m "feat: add header and footer components with routing

- Create responsive Header component with navigation menu
  * Logo and brand name
  * Navigation links (Beranda, Jelajahi, Pesanan, Tentang)
  * Profil button
  * Mobile hamburger menu
- Add Footer component with site information
  * Links to important pages
  * Social media links
  * Copyright information
- Setup React Router in App.tsx
  * Configure routes for all pages
  * Add 404 Not Found route
- Add base styling in App.css"

# Push
git push -u origin feat/header-footer
```

### ✅ Checklist
- [ ] Header muncul di semua page
- [ ] Navigation links berfungsi (React Router)
- [ ] Mobile menu toggle berfungsi
- [ ] Footer muncul di bottom
- [ ] Responsive di mobile dan desktop

---

## 4️⃣ Branch: `feat/landing-page`
**Dependency:** Harus setelah Branch 3 merged

### 📦 Files to Include
```
src/
├── pages/
│   ├── Beranda.tsx
│   └── NotFound.tsx
└── img/
    ├── gambar_dashboard_atas1.jpg
    ├── gambar_dashboard_atas2.jpg
    ├── gambar_dashboard_atas3.jpg
    ├── KfC.jpg
    └── J.co.jpg
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/landing-page

# Add files
git add src/pages/Beranda.tsx src/pages/NotFound.tsx
git add src/img/

# Commit
git commit -m "feat: create landing page (Beranda) with hero section

- Add Beranda.tsx with hero carousel
  * Auto-slide carousel with 3 background images
  * Hero text: 'Selamatkan Bumi Dari Limbah Makanan!'
  * Description about GoodBite mission
  * CTA buttons (Mulai Jelajahi, Gabung Sebagai Mitra)
- Add floating package cards in hero
  * KFC, Suzuya Mall package
  * JCO Donuts & Coffee package
- Add popular packages section
  * Display featured packages using PackageCard
- Add statistics section
  * Show platform impact (users, partners, food saved)
- Add how it works section
  * 3-step process explanation
- Add testimonials section (optional)
- Create 404 Not Found page
- Add all hero and product images
  * gambar_dashboard_atas1/2/3.jpg
  * KfC.jpg, J.co.jpg"

# Push
git push -u origin feat/landing-page
```

### ✅ Checklist
- [ ] Hero carousel auto-slide berfungsi (interval 5s)
- [ ] Hero text dan deskripsi tampil dengan benar
- [ ] Floating cards (KFC & JCO) tampil dengan gambar asli
- [ ] Popular packages section load data packages
- [ ] Semua section responsive
- [ ] 404 page accessible ketik URL salah
- [ ] Images loaded tanpa error

---

## 📊 Summary - Orang 1

| Branch # | Branch Name | Files | Estimated Time | Dependencies |
|----------|-------------|-------|----------------|--------------|
| 1 | `feat/project-setup` | 15 files | 2-3 hours | None |
| 2 | `feat/components-base` | 30+ files | 3-4 hours | Branch 1 |
| 3 | `feat/header-footer` | 4 files | 2-3 hours | Branch 2 |
| 4 | `feat/landing-page` | 7 files | 4-5 hours | Branch 3 |

**Total:** ~11-15 hours development time

---

## 🎯 Priority Order

```
1. feat/project-setup      ← START HERE (Critical!)
2. feat/components-base    ← After #1 merged
3. feat/header-footer      ← After #2 merged
4. feat/landing-page       ← After #3 merged
```

---

## 💡 Tips

### Before Starting Each Branch
```bash
# Always pull latest main
git checkout main
git pull origin main

# Then create new branch
git checkout -b feat/branch-name
```

### After PR Merged
```bash
# Delete local branch
git branch -d feat/branch-name

# Delete remote branch (optional)
git push origin --delete feat/branch-name
```

### If You Need to Update Branch
```bash
# On your feature branch
git checkout feat/your-branch

# Merge latest main
git merge main

# Resolve conflicts if any
# Then push
git push
```

---

## 📝 Commit Message Format

```
feat: short description (imperative, present tense)

- Bullet point 1
- Bullet point 2
- Bullet point 3

Example:
feat: add responsive navigation header

- Create Header component with logo and menu
- Add mobile hamburger menu
- Implement navigation routing
```

---

## 🎓 Learning Resources

- **React Router:** https://reactrouter.com/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com/
- **Vite:** https://vitejs.dev/

---

**Good luck, Orang 1! You're building the foundation! 🚀**
