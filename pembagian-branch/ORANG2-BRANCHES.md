# 👤 ORANG 2 - EXPLORE & CHECKOUT FEATURES

## 🎯 Tanggung Jawab
Membangun **fitur eksplorasi** dan **proses checkout**

## 🌿 Branches (4 branches total)

---

## 5️⃣ Branch: `feat/package-data`
**Dependency:** Harus setelah `feat/project-setup` (Branch 1) merged

### 📦 Files to Include
```
src/
└── data/
    └── packages.ts
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/package-data

# Add files
git add src/data/packages.ts

# Commit
git commit -m "feat: add package data source with interface

- Create Package interface with TypeScript
  * id, storeName, location, category
  * price, originalValue, available
  * pickupTime, description, image
- Add packages array with 8-10 sample data
  * Roti Bakar 88 (Bakery, Jakarta Selatan)
  * Kopi Kenangan (Minuman, Jakarta Pusat)
  * Geprek Bensu (Restoran, Tangerang)
  * J.Co Donuts (Bakery, Jakarta Barat)
  * Pizza Hut (Restoran, Bekasi)
  * Roti'O (Bakery, Depok)
  * Chatime (Minuman, Jakarta Timur)
  * Hokben (Restoran, Jakarta Utara)
- Each package includes realistic pricing and details"

# Push
git push -u origin feat/package-data
```

### ✅ Checklist
- [ ] packages.ts export Package interface
- [ ] packages.ts export packages array
- [ ] Minimal 8 packages dengan data lengkap
- [ ] Semua field required terisi (no undefined)
- [ ] Harga realistis (price < originalValue)
- [ ] Kategori konsisten (Bakery, Restoran, Minuman)

---

## 6️⃣ Branch: `feat/explore-page`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) dan `feat/package-data` (Branch 5) merged

### 📦 Files to Include
```
src/
└── pages/
    └── Jelajahi.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/explore-page

# Add files
git add src/pages/Jelajahi.tsx

# Commit
git commit -m "feat: create explore/browse packages page

- Add Jelajahi.tsx page component
- Implement package listing with grid layout
  * 2 columns on mobile
  * 3 columns on tablet
  * 4 columns on desktop
- Add filter functionality
  * Filter by category (Semua, Bakery, Restoran, Minuman)
  * Filter by location
  * Active filter count badge
- Implement search bar
  * Search by store name or location
  * Real-time search filtering
- Add sorting options
  * Sort by price (low to high, high to low)
  * Sort by pickup time
  * Sort by discount percentage
- Display package cards using PackageCard component
- Add loading skeleton while data loads
- Add empty state when no results found
- Show total packages count
- Make fully responsive"

# Push
git push -u origin feat/explore-page
```

### ✅ Checklist
- [ ] Packages display in grid layout
- [ ] Filter by category berfungsi
- [ ] Search bar filter packages real-time
- [ ] Sorting changes order packages
- [ ] PackageCard clickable ke detail page
- [ ] Responsive di all screen sizes
- [ ] Loading state muncul saat data load
- [ ] Empty state jika tidak ada hasil

---

## 7️⃣ Branch: `feat/package-detail`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) dan `feat/package-data` (Branch 5) merged

### 📦 Files to Include
```
src/
└── pages/
    └── PaketDetail.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/package-detail

# Add files
git add src/pages/PaketDetail.tsx

# Commit
git commit -m "feat: create package detail page with gallery

- Add PaketDetail.tsx page component
- Implement back button navigation
- Create image carousel/gallery
  * Multiple images slider
  * Thumbnail navigation
  * Full-screen view option
- Display package information
  * Store name and category badge
  * Original price (strikethrough)
  * Discounted price (highlighted)
  * Discount percentage badge
  * Available stock indicator
- Add countdown timer
  * Show time until pickup window
  * Update every second
  * Visual urgency (red when < 1 hour)
- Show detailed description
  * What's included in surprise bag
  * Allergen information (optional)
- Implement review section
  * Display user reviews
  * Star rating display
  * Review text and photos
  * Average rating calculation
- Embed location map
  * Google Maps iframe
  * Store address display
  * Get directions link
- Create sticky booking card
  * Shows price and quantity selector
  * 'Pesan Sekarang' button
  * Sticks to bottom on mobile
  * Sticks to right on desktop
- Add similar packages section (optional)
- Make navbar-less (no Header, use back button)
- Fully responsive design"

# Push
git push -u origin feat/package-detail
```

### ✅ Checklist
- [ ] Image carousel berfungsi dengan smooth transition
- [ ] Countdown timer update setiap detik
- [ ] Stock indicator tampil benar
- [ ] Review section display reviews
- [ ] Map embed tampil dengan benar
- [ ] Sticky booking card tetap visible saat scroll
- [ ] Back button kembali ke Jelajahi page
- [ ] Quantity selector (min 1, max = available stock)
- [ ] "Pesan Sekarang" button ke Checkout page
- [ ] Responsive: 1 column mobile, 2 column desktop

---

## 8️⃣ Branch: `feat/checkout-flow`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) dan `feat/package-data` (Branch 5) merged

### 📦 Files to Include
```
src/
└── pages/
    └── Checkout.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/checkout-flow

# Add files
git add src/pages/Checkout.tsx

# Commit
git commit -m "feat: implement multi-step checkout flow

- Add Checkout.tsx with stepper UI
- Implement Step 1: Customer Information
  * Form: nama lengkap (required)
  * Form: nomor HP (required, min 10 digits)
  * Form: email (required, email format)
  * Form: catatan tambahan (optional)
  * Form validation with error messages
  * Next button (disabled until valid)
- Implement Step 2: Payment Method
  * Payment options (Transfer Bank, E-Wallet, Cash)
  * Bank selection (BCA, Mandiri, BRI, BNI)
  * E-Wallet selection (GoPay, OVO, Dana, ShopeePay)
  * Virtual account/phone number display
  * Upload bukti bayar (optional for cash)
  * Back and Next buttons
- Implement Step 3: Confirmation
  * Show order summary
    - Package name and store
    - Quantity and total price
    - Pickup time and location
    - Customer info recap
  * Display large QR code for booking
    - Generate QR with order ID
    - 200x200px size
  * Show booking details
    - Order ID (format: ORD-timestamp)
    - Order date and time
    - Status: Active
  * Action buttons
    - Download QR code as image
    - Share QR code (optional)
    - Lihat Detail Pesanan (go to PesananDetail)
    - Kembali ke Beranda
- Save order to localStorage
  * Key: 'goodbite_orders'
  * Format: array of order objects
  * Include: orderId, packageId, packageName, storeName, 
            location, price, pickupTime, customerName, 
            customerPhone, customerEmail, orderDate, 
            status: 'active', qrCode (base64)
- Add confetti animation on success
  * Trigger after order saved
  * Celebrate booking completion
- Implement stepper progress indicator
  * Show current step (1/3, 2/3, 3/3)
  * Visual progress bar
  * Step titles
- Make navbar-less (no Header)
- Fully responsive
  * Single column mobile
  * Two column desktop (form left, summary right)"

# Push
git push -u origin feat/checkout-flow
```

### ✅ Checklist
- [ ] Step 1: Form validation berfungsi
- [ ] Step 1: Error messages tampil jika invalid
- [ ] Step 1: Next button disabled jika form incomplete
- [ ] Step 2: Payment options selectable
- [ ] Step 2: Virtual account/number tampil sesuai pilihan
- [ ] Step 3: QR code generated dengan order ID
- [ ] Step 3: Order summary display lengkap
- [ ] Step 3: Confetti animation triggered
- [ ] localStorage saved dengan format benar
- [ ] Download QR code berfungsi (save as image)
- [ ] Back button di step 2 kembali ke step 1
- [ ] Navigation ke PesananDetail berfungsi
- [ ] Stepper indicator update per step
- [ ] Responsive: form stack on mobile

---

## 📊 Summary - Orang 2

| Branch # | Branch Name | Files | Estimated Time | Dependencies |
|----------|-------------|-------|----------------|--------------|
| 5 | `feat/package-data` | 1 file | 1-2 hours | Branch 1 |
| 6 | `feat/explore-page` | 1 file | 3-4 hours | Branch 2, 5 |
| 7 | `feat/package-detail` | 1 file | 5-6 hours | Branch 2, 5 |
| 8 | `feat/checkout-flow` | 1 file | 6-8 hours | Branch 2, 5 |

**Total:** ~15-20 hours development time

---

## 🎯 Priority Order

```
1. feat/package-data       ← START HERE (needed by others!)
2. feat/explore-page       ← After Branch 2 & 5 merged
3. feat/package-detail     ← Can be parallel with #2
4. feat/checkout-flow      ← After Branch 2 & 5 merged
```

**Note:** Branch 6, 7, 8 bisa dikerjakan **parallel** setelah Branch 2 & 5 merged!

---

## 💡 Tips

### Working with localStorage

```javascript
// Save order
const order = {
  orderId: `ORD-${Date.now()}`,
  packageId: "1",
  packageName: "Paket Roti Bakar",
  storeName: "Roti Bakar 88",
  location: "Jakarta Selatan",
  price: 15000,
  originalValue: 45000,
  pickupTime: "18:00 - 20:00",
  customerName: "John Doe",
  customerPhone: "081234567890",
  customerEmail: "john@example.com",
  orderDate: new Date().toISOString(),
  status: "active",
  qrCode: qrCodeDataURL // base64 string
};

// Get existing orders
const existingOrders = JSON.parse(
  localStorage.getItem('goodbite_orders') || '[]'
);

// Add new order
existingOrders.push(order);

// Save back
localStorage.setItem('goodbite_orders', JSON.stringify(existingOrders));
```

### QR Code Generation

```bash
# Install library
npm install qrcode.react

# Usage in component
import QRCode from 'qrcode.react';

<QRCode 
  value={orderId} 
  size={200}
  level="H"
  includeMargin={true}
/>
```

### Form Validation

```javascript
// Phone validation
const isValidPhone = (phone) => /^08\d{8,11}$/.test(phone);

// Email validation  
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
```

### Countdown Timer

```javascript
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

function calculateTimeLeft() {
  const pickupDate = new Date();
  // Set pickup time...
  const now = new Date();
  const difference = pickupDate - now;
  
  if (difference > 0) {
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return { hours: 0, minutes: 0, seconds: 0 };
}
```

---

## 🎓 Learning Resources

- **React Hook Form:** https://react-hook-form.com/
- **QR Code React:** https://www.npmjs.com/package/qrcode.react
- **React Confetti:** https://www.npmjs.com/package/react-confetti
- **Framer Motion:** https://www.framer.com/motion/ (for animations)

---

## 📝 Testing Checklist

### Explore Page
- [ ] Filter "Bakery" hanya show bakery items
- [ ] Search "pizza" hanya show pizza items
- [ ] Sort by price works correctly
- [ ] Empty state jika search tidak ada hasil

### Package Detail
- [ ] URL `/paket/1` tampil package dengan id=1
- [ ] URL `/paket/999` tampil 404 or error handling
- [ ] Countdown timer countdown correctly
- [ ] Map embed load tanpa error

### Checkout
- [ ] Form validation catch all invalid input
- [ ] Cannot proceed tanpa isi semua required field
- [ ] QR code unik per order (different IDs)
- [ ] localStorage save order dengan format benar
- [ ] Refresh page tidak hilangkan order data

---

**Good luck, Orang 2! You're building the core user flow! 🎯**
