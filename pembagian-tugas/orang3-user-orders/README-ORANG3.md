# 👤 ORANG 3: USER MANAGEMENT & ORDERS

## ⚠️ PENTING: OOP UPDATE!
**`Pesanan.tsx` dan `PesananDetail.tsx` sekarang pakai OOP!**  
📖 Baca: **`../OOP_UPDATE.md`** untuk detail.

**Yang berubah:**
- Import `OrderService` dan `Order` model
- Pakai `OrderService.getAllOrders()`, `getOrderById()`, `updateOrderStatus()`
- Tidak langsung manipulasi data

---

## 🎯 Tugas
Handle autentikasi, order management, profil, dan halaman informasi

## 📦 Files yang Harus di-Push

### src/pages/
- ✅ **`Login.tsx`** - Halaman login/register
- ✅ **`Pesanan.tsx`** - Daftar pesanan user (UPDATED: sekarang pakai OOP)
- ✅ **`PesananDetail.tsx`** - Detail pesanan dengan QR code (UPDATED: sekarang pakai OOP)
- ✅ **`Profil.tsx`** - Halaman profil user (edit info, preferensi)
- ✅ **`Tentang.tsx`** - About/tentang platform GoodBite
- ✅ **`Bisnis.tsx`** - Halaman untuk bisnis yang mau jadi partner

### src/hooks/
- ✅ `use-toast.ts` - Toast notification hook
- ✅ `use-mobile.tsx` - Mobile detection hook

### src/components/ui/
- ✅ `toast.tsx` - Toast notification component
- ✅ `toaster.tsx` - Toast container
- ✅ `use-toast.ts` - Toast hook (duplicate untuk safety)
- ✅ `alert.tsx` - Alert component
- ✅ `sheet.tsx` - Sliding sheet/drawer
- ✅ `dropdown-menu.tsx` - Dropdown menu
- ✅ `popover.tsx` - Popover component
- ✅ `calendar.tsx` - Date picker calendar
- ✅ `command.tsx` - Command palette
- ✅ `scroll-area.tsx` - Custom scrollbar
- ✅ `skeleton.tsx` - Loading skeleton
- ✅ `progress.tsx` - Progress bar
- ✅ `slider.tsx` - Range slider
- ✅ `switch.tsx` - Toggle switch
- ✅ `table.tsx` - Data table

## 🚀 Cara Push ke GitHub

```bash
# 1. Pull perubahan terbaru dari main (setelah Orang 1 & 2 merge)
git checkout main
git pull origin main

# 2. Buat branch feature baru
git checkout -b feature/user-orders

# 3. Tambahkan semua files di folder ini
git add .

# 4. Commit dengan pesan yang jelas
git commit -m "feat: add authentication and order management

- Implement Login page with authentication
- Create Pesanan page with:
  * Order history listing
  * Stats cards (total orders, active, completed, savings)
  * Tabbed interface (Semua, Aktif, Selesai)
  * QR code preview for each order
  * Countdown timer for active orders
- Build PesananDetail page with:
  * Large QR code (280px) for pickup verification
  * Timeline showing order progress
  * Download QR functionality
  * Rating modal after pickup confirmation
  * Impact stats (kg food saved, CO2 reduced)
- Add Profil page for user settings
- Create Tentang page (about platform)
- Add Bisnis page for partner registration
- Implement toast notifications
- Add mobile detection hook"

# 5. Push ke GitHub
git push origin feature/user-orders

# 6. Buat Pull Request di GitHub
```

## 📝 Checklist Before Push
- [ ] Login page dengan form validation
- [ ] Pesanan page bisa load orders dari localStorage
- [ ] PesananDetail menampilkan QR code yang bisa di-download
- [ ] Stats di Pesanan page akurat (hitung dari localStorage)
- [ ] Rating modal berfungsi setelah konfirmasi pickup
- [ ] Countdown timer di active orders berjalan
- [ ] Profil page bisa edit user info
- [ ] Tentang dan Bisnis page informatif
- [ ] Toast notifications muncul saat ada aksi penting
- [ ] Responsive di mobile dan desktop

## 💡 Tips
- **Push TERAKHIR** atau bersamaan dengan Orang 2 (tidak dependent)
- Pesanan page harus bisa read orders dari localStorage yang disimpan oleh Checkout (Orang 2)
- QR code harus match dengan order ID
- Test flow: Login → Pesanan → klik detail → confirm pickup → rating

## 🔗 Dependencies
**Butuh dari Orang 1:**
- `Header.tsx` - Untuk navigation
- `Footer.tsx` - Untuk footer
- `utils.ts` - Utility functions
- UI components: `button.tsx`, `card.tsx`, `badge.tsx`, `separator.tsx`

**Butuh dari Orang 2:**
- `packages.ts` - Untuk map package ID ke package info
- Format order di localStorage (harus konsisten):
  ```javascript
  {
    orderId: "ORD-" + timestamp,
    packageId: "string",
    packageName: "string",
    storeName: "string",
    location: "string",
    price: number,
    pickupTime: "string",
    customerName: "string",
    customerPhone: "string",
    orderDate: "string",
    status: "active" | "completed",
    qrCode: "string" (base64 atau URL)
  }
  ```

## 🎯 Fitur Utama yang Harus Ada

### Login.tsx
- Form login dengan email/phone dan password
- Form register untuk user baru
- Validation (required fields, format email/phone)
- Toggle antara login dan register mode
- Social login buttons (Google, Facebook) - bisa dummy
- Remember me checkbox
- Forgot password link

### Pesanan.tsx
- **Stats Cards** di atas:
  - Total Pesanan
  - Pesanan Aktif
  - Pesanan Selesai
  - Total Hemat/Savings
- **Tabs Navigation**: Semua | Aktif | Selesai
- **Order Cards** dengan info:
  - Nama paket & toko
  - Harga
  - Waktu pickup
  - Status (badge warna berbeda)
  - QR code preview (kecil, 80px)
  - Countdown timer untuk active orders
  - Button "Lihat Detail"
- Empty state jika belum ada pesanan
- Pull to refresh (optional)

### PesananDetail.tsx
- **Large QR Code** (280px x 280px) di tengah
- **Order Info** lengkap:
  - Order ID
  - Package name & store
  - Pickup time & location
  - Price
  - Order date
- **Timeline** dengan 3 steps:
  1. Pesanan Dibuat ✓
  2. Siap Diambil (jika waktu pickup sudah tiba)
  3. Selesai (setelah confirm pickup)
- **Action Buttons**:
  - Download QR Code (save as image)
  - Share QR (optional)
  - Konfirmasi Sudah Diambil (untuk active orders)
  - Beri Rating (muncul setelah konfirmasi)
- **Rating Modal**:
  - 5-star rating
  - Text review
  - Upload foto (optional)
  - Submit button
- **Impact Stats** (setelah selesai):
  - "Kamu sudah menyelamatkan X kg makanan"
  - "Mengurangi X kg CO2"
  - Badge achievement

### Profil.tsx
- User info (nama, email, phone, foto profil)
- Edit profil button
- Preferensi notifikasi
- Preferensi lokasi favorit
- Riwayat achievement/badges
- Total impact (total kg saved, total CO2 reduced)
- Logout button

### Tentang.tsx
- Hero section tentang GoodBite
- Misi: "Selamatkan Bumi Dari Limbah Makanan!"
- Cara kerja platform (3-4 steps)
- Statistik impact global
- Tim atau founder info
- Contact info

### Bisnis.tsx
- Hero section untuk bisnis
- Benefit jadi partner GoodBite
- Cara daftar jadi partner
- Form registrasi bisnis:
  - Nama bisnis
  - Kategori (Bakery, Restaurant, Cafe, dll)
  - Lokasi
  - Kontak person
  - Email & phone
  - Deskripsi singkat
- Testimoni dari partner yang sudah join
- FAQ section

## 🔧 LocalStorage Management

### Read Orders
```javascript
// Di Pesanan.tsx
const orders = JSON.parse(localStorage.getItem('goodbite_orders') || '[]');
```

### Update Order Status
```javascript
// Di PesananDetail.tsx
const updateOrderStatus = (orderId, newStatus) => {
  const orders = JSON.parse(localStorage.getItem('goodbite_orders') || '[]');
  const updatedOrders = orders.map(order => 
    order.orderId === orderId 
      ? { ...order, status: newStatus }
      : order
  );
  localStorage.setItem('goodbite_orders', JSON.stringify(updatedOrders));
};
```

### Calculate Stats
```javascript
// Di Pesanan.tsx
const totalOrders = orders.length;
const activeOrders = orders.filter(o => o.status === 'active').length;
const completedOrders = orders.filter(o => o.status === 'completed').length;
const totalSavings = orders.reduce((sum, o) => sum + (o.originalValue - o.price), 0);
```

## 📊 Stats Calculation
- **Total Pesanan**: count semua orders
- **Pesanan Aktif**: count orders dengan status = 'active'
- **Pesanan Selesai**: count orders dengan status = 'completed'
- **Total Hemat**: sum semua (originalValue - price)
- **Kg Saved**: completedOrders × 1.5 (asumsi tiap paket = 1.5kg)
- **CO2 Reduced**: kgSaved × 2.5 (asumsi 1kg food = 2.5kg CO2)

## ✨ Kompleksitas
- **Tinggi** karena banyak halaman (6 pages)
- QR code generation dan download
- LocalStorage management
- Stats calculation
- Timeline UI yang kompleks
- Rating dan review system

---
**Good luck! 💪**
