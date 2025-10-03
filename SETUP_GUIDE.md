# 📦 Setup Guide - Download Libraries

Panduan simple untuk download semua library yang dibutuhkan.

---

## 🎯 2 CARA SETUP PROJECT

### **Cara 1: Clone Project yang Sudah Ada** (Recommended)

```bash
# 1. Clone repository
git clone https://github.com/halimelsaputra/TESTING.git

# 2. Masuk ke folder
cd TESTING

# 3. Install semua dependencies
npm install

# 4. Run project
npm run dev
```

**Selesai!** Browser otomatis buka di `http://localhost:8080`

---

### **Cara 2: Setup dari Nol**

#### Step 1: Install Node.js

Download & install dari: https://nodejs.org/ (pilih LTS version)

```bash
# Cek berhasil:
node --version
npm --version
```

#### Step 2: Create Project

```bash
# Create Vite + React + TypeScript project
npm create vite@latest my-project -- --template react-ts

# Masuk ke folder
cd my-project

# Install dependencies dasar
npm install
```

#### Step 3: Install TailwindCSS

```bash
# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer

# Generate config files
npx tailwindcss init -p
```

Edit `tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 4: Setup shadcn/ui

```bash
# Install & setup shadcn/ui
npx shadcn-ui@latest init
```

Pilih options:
- TypeScript: **yes**
- Style: **Default**
- Color: **Slate**
- CSS file: **src/index.css**
- CSS variables: **yes**
- Tailwind config: **tailwind.config.js**
- Components alias: **@/components**
- Utils alias: **@/lib/utils**

#### Step 5: Install UI Components

```bash
# Install semua components yang dipakai di project:
npx shadcn-ui@latest add button card input badge separator toast table tabs dialog alert select textarea label checkbox switch dropdown-menu
```

#### Step 6: Install Libraries Lain

```bash
# React Router (untuk routing)
npm install react-router-dom

# Framer Motion (untuk animasi)
npm install framer-motion

# QR Code generator
npm install qrcode.react

# Icons
npm install lucide-react

# Toast notifications
npm install sonner

# Date utilities
npm install date-fns
```

#### Step 7: Run Project

```bash
npm run dev
```

---

## 📋 DAFTAR LENGKAP SYNTAX

### Install Dependencies dari package.json

```bash
npm install
```

### Install Package Baru

```bash
# Install package:
npm install [package-name]

# Contoh:
npm install react-router-dom
npm install framer-motion
```

### Install shadcn Component

```bash
# Install 1 component:
npx shadcn-ui@latest add [component-name]

# Contoh:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card

# Install multiple components sekaligus:
npx shadcn-ui@latest add button card input badge
```

### Uninstall Package

```bash
npm uninstall [package-name]
```

### Update Packages

```bash
# Update semua packages:
npm update

# Check outdated packages:
npm outdated
```

### Clean Install (Jika Ada Masalah)

```bash
# Hapus node_modules & package-lock.json
Remove-Item -Recurse -Force node_modules, package-lock.json

# Install ulang
npm install
```

### Run Commands

```bash
# Development server:
npm run dev

# Build production:
npm run build

# Preview production build:
npm run preview
```

---

## 🚨 TROUBLESHOOTING

### Problem: node_modules hilang

```bash
npm install
```

### Problem: Package error/conflict

```bash
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Problem: Port sudah dipakai

Edit `vite.config.ts`, tambahkan:
```ts
export default defineConfig({
  server: {
    port: 3000, // Ganti port
  },
})
```

### Problem: TypeScript error

```bash
# Restart TS server di VS Code
# Tekan: Ctrl+Shift+P
# Ketik: "TypeScript: Restart TS Server"
```

---

## 📁 FILES YANG DI-DOWNLOAD

Setelah `npm install`, folder `node_modules/` akan berisi:

- **react** - Library React
- **react-dom** - React DOM renderer
- **react-router-dom** - Routing
- **vite** - Build tool
- **typescript** - TypeScript compiler
- **tailwindcss** - CSS framework
- **@radix-ui/** - UI primitives (45+ packages)
- **framer-motion** - Animasi
- **lucide-react** - Icons
- **qrcode.react** - QR Code
- **sonner** - Toast notifications
- Dan **1,000+ packages lainnya** (dependencies dari dependencies)

**Total size:** ~200MB - 500MB

---

## ✅ CHECKLIST SETUP

- [ ] Install Node.js
- [ ] Clone/Create project
- [ ] Run `npm install`
- [ ] Setup TailwindCSS (jika dari nol)
- [ ] Setup shadcn/ui (jika dari nol)
- [ ] Install UI components (jika dari nol)
- [ ] Install libraries (jika dari nol)
- [ ] Run `npm run dev`
- [ ] Browser buka di `http://localhost:8080`
- [ ] ✅ Selesai!

---

## 🎓 KESIMPULAN

**Untuk project yang sudah ada:**
```bash
git clone [repo-url]
cd [project-name]
npm install
npm run dev
```

**3 command itu cukup!** 🎉

Semua library (1,000+ packages) akan otomatis ter-download dari internet ke folder `node_modules/`.
