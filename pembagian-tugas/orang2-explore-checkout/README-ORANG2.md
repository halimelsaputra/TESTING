# 👤 ORANG 2: EXPLORE & DETAIL PAGES

## 🎯 Tugas
Handle user journey dari explore → detail paket → checkout

## 📦 Files yang Harus di-Push

### src/pages/
- ✅ **`Jelajahi.tsx`** - Halaman eksplorasi/browse paket makanan
- ✅ **`PaketDetail.tsx`** - Detail paket (kompleks: image gallery, reviews, map, countdown)
- ✅ **`Checkout.tsx`** - Proses checkout (multi-step form, payment, confirmation)

### src/data/
- ✅ `packages.ts` - Data paket makanan (shared data yang dipakai di berbagai halaman)

### src/components/ui/
- ✅ `input.tsx` - Input field untuk form
- ✅ `label.tsx` - Label untuk form
- ✅ `select.tsx` - Dropdown select
- ✅ `textarea.tsx` - Text area untuk form
- ✅ `checkbox.tsx` - Checkbox component
- ✅ `radio-group.tsx` - Radio button group
- ✅ `form.tsx` - Form wrapper component
- ✅ `tabs.tsx` - Tabs navigation
- ✅ `dialog.tsx` - Modal dialog
- ✅ `alert-dialog.tsx` - Alert/confirmation dialog
- ✅ `carousel.tsx` - Image carousel/slider
- ✅ `accordion.tsx` - Collapsible accordion
- ✅ `avatar.tsx` - User avatar component

## 🚀 Cara Push ke GitHub

```bash
# 1. Pull perubahan terbaru dari main (setelah Orang 1 merge)
git checkout main
git pull origin main

# 2. Buat branch feature baru
git checkout -b feature/explore-checkout

# 3. Tambahkan semua files di folder ini
git add .

# 4. Commit dengan pesan yang jelas
git commit -m "feat: add explore, detail, and checkout pages

- Implement Jelajahi page with package listing and filters
- Create PaketDetail page with:
  * Image gallery/carousel
  * Product information and description
  * Countdown timer for pickup time
  * Review and rating system
  * Location map embed
  * Booking functionality
- Build Checkout page with:
  * Multi-step form (customer info, payment, confirmation)
  * Form validation
  * Order summary
  * QR code generation for booking
- Add packages.ts data source for all package information"

# 5. Push ke GitHub
git push origin feature/explore-checkout

# 6. Buat Pull Request di GitHub
```

## 📝 Checklist Before Push
- [ ] Semua 3 pages sudah lengkap dan berfungsi
- [ ] Form validation di Checkout sudah berfungsi
- [ ] Image carousel di PaketDetail smooth
- [ ] Data packages.ts sudah lengkap dengan minimal 8-10 paket
- [ ] Routing dari Jelajahi → PaketDetail → Checkout sudah connect
- [ ] Responsive di mobile dan desktop
- [ ] Tidak ada error saat compile

## 💡 Tips
- **Push SETELAH Orang 1** karena butuh Header, Footer, dan PackageCard components
- Pastikan `packages.ts` punya data lengkap (id, nama, harga, lokasi, dll)
- Test flow lengkap: browse → klik detail → checkout → konfirmasi
- PaketDetail adalah halaman paling kompleks, pastikan semua fitur jalan
- Checkout harus simpan data ke localStorage untuk Orang 3

## 🔗 Dependencies
**Butuh dari Orang 1:**
- `Header.tsx` - Untuk navigation
- `Footer.tsx` - Untuk footer
- `PackageCard.tsx` - Untuk menampilkan card paket di Jelajahi
- `utils.ts` - Utility functions
- UI components: `button.tsx`, `card.tsx`, `badge.tsx`

**Untuk Orang 3:**
- `packages.ts` - Data paket (akan dipakai di halaman Pesanan)
- Checkout harus menyimpan order ke localStorage dengan format:
  ```javascript
  {
    orderId: "string",
    packageId: "string",
    packageName: "string",
    storeName: "string",
    price: number,
    pickupTime: "string",
    customerName: "string",
    customerPhone: "string",
    orderDate: "string",
    status: "pending" | "confirmed" | "completed"
  }
  ```

## 🎯 Fitur Utama yang Harus Ada

### Jelajahi.tsx
- Grid layout untuk menampilkan paket makanan
- Filter berdasarkan kategori (Bakery, Minuman, Restoran)
- Filter berdasarkan lokasi
- Search bar untuk cari paket
- Sorting (harga, waktu pickup, dll)
- Loading state saat fetch data

### PaketDetail.tsx
- Image carousel dengan 3-5 gambar
- Info paket (nama, harga asli, harga diskon, deskripsi)
- Countdown timer sampai waktu pickup
- Stock indicator (berapa paket tersisa)
- Review dan rating dari pembeli sebelumnya
- Embed Google Maps untuk lokasi toko
- Button "Pesan Sekarang" yang link ke Checkout
- Sticky booking card saat scroll

### Checkout.tsx
- Step 1: Info pelanggan (nama, nomor HP, email)
- Step 2: Pilih metode pembayaran
- Step 3: Konfirmasi pesanan dengan QR code
- Form validation (required fields, format HP, email)
- Summary pesanan (nama paket, harga, waktu pickup)
- Simpan order ke localStorage setelah konfirmasi
- Confetti animation saat berhasil booking
- Button untuk download QR code

## ✨ Kompleksitas
- **Paling tinggi** di antara 3 orang
- Banyak form handling dan validasi
- Image carousel dan map embed
- Multi-step checkout flow
- QR code generation

---
**Good luck! 🚀**
