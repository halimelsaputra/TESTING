# 👤 ORANG 3 - AUTH & ORDER MANAGEMENT

## 🎯 Tanggung Jawab
Membangun **autentikasi**, **order management**, dan **halaman informasi**

## 🌿 Branches (5 branches total)

---

## 9️⃣ Branch: `feat/auth-login`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) merged

### 📦 Files to Include
```
src/
└── pages/
    └── Login.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/auth-login

# Add files
git add src/pages/Login.tsx

# Commit
git commit -m "feat: create login and authentication page

- Add Login.tsx page component
- Implement dual-mode form (Login/Register)
- Login mode features:
  * Email/phone number input field
  * Password input field (with show/hide toggle)
  * Remember me checkbox
  * Forgot password link
  * Login button
  * Switch to register mode link
- Register mode features:
  * Full name input field
  * Email input field
  * Phone number input field
  * Password input field (with strength indicator)
  * Confirm password field
  * Terms & conditions checkbox
  * Register button
  * Switch to login mode link
- Add form validation
  * Email format validation
  * Phone number format (08xxxxxxxxxx)
  * Password minimum 8 characters
  * Passwords match validation
  * Required field validation
  * Show error messages
- Add social login buttons (UI only)
  * Login with Google
  * Login with Facebook
  * Dummy functionality for now
- Success handling
  * Save user to localStorage ('goodbite_user')
  * Show success toast
  * Redirect to homepage
- Add decorative elements
  * Hero image/illustration
  * Brand logo
  * Tagline: 'Selamatkan Bumi Dari Limbah Makanan!'
- Make fully responsive
  * Single column mobile
  * Split screen desktop (form left, image right)"

# Push
git push -u origin feat/auth-login
```

### ✅ Checklist
- [ ] Toggle antara Login/Register mode berfungsi
- [ ] Form validation show error messages
- [ ] Password show/hide toggle works
- [ ] Password strength indicator di register mode
- [ ] Cannot submit dengan invalid data
- [ ] Success login/register save user ke localStorage
- [ ] Toast notification muncul saat success
- [ ] Redirect ke homepage after login
- [ ] Social login buttons tampil (dummy for now)
- [ ] Responsive: split screen desktop, stack mobile

---

## 🔟 Branch: `feat/order-management`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) dan `feat/package-data` (Branch 5) merged

### 📦 Files to Include
```
src/
├── pages/
│   └── Pesanan.tsx
└── hooks/
    ├── use-toast.ts
    └── use-mobile.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/order-management

# Add files
git add src/pages/Pesanan.tsx
git add src/hooks/

# Commit
git commit -m "feat: create order management page with stats

- Add Pesanan.tsx page component
- Implement stats dashboard
  * Total Pesanan card (count all orders)
  * Pesanan Aktif card (count active orders)
  * Pesanan Selesai card (count completed orders)
  * Total Hemat card (sum of savings)
  * Icons and colors for each stat
  * Animated counters (optional)
- Create tabbed interface
  * Tab: Semua (show all orders)
  * Tab: Aktif (filter status='active')
  * Tab: Selesai (filter status='completed')
  * Active tab indicator
- Display order cards in list
  * Package name and store name
  * Order ID (e.g., ORD-1696789012345)
  * Price and original value (show savings)
  * Pickup time and location
  * Status badge (color-coded)
    - Green: Siap Diambil
    - Orange: Menunggu Pembayaran
    - Blue: Selesai
  * Small QR code preview (80x80px)
  * Countdown timer (for active orders only)
  * 'Lihat Detail' button
- Load orders from localStorage
  * Key: 'goodbite_orders'
  * Parse JSON array
  * Handle empty state
- Empty state handling
  * Show message when no orders
  * Show illustration
  * 'Mulai Jelajahi' button to explore page
- Calculate statistics
  * Count orders by status
  * Calculate total savings
  * Display formatted numbers (Rp format)
- Add custom hooks
  * use-toast.ts for notifications
  * use-mobile.tsx for responsive detection
- Make fully responsive
  * 1 column mobile
  * 2 stats per row mobile
  * 4 stats per row desktop
  * Order cards stack on mobile"

# Push
git push -u origin feat/order-management
```

### ✅ Checklist
- [ ] Stats cards display correct numbers from localStorage
- [ ] Tabs switch filter orders correctly
- [ ] Active orders show countdown timer
- [ ] Countdown updates every second
- [ ] QR code preview render correctly
- [ ] Status badges show correct color
- [ ] "Lihat Detail" button navigates to PesananDetail
- [ ] Empty state shows when no orders
- [ ] Total Hemat calculated correctly (originalValue - price)
- [ ] Responsive: stats 2x2 mobile, 1x4 desktop

---

## 1️⃣1️⃣ Branch: `feat/order-detail-qr`
**Dependency:** Harus setelah `feat/order-management` (Branch 10) merged

### 📦 Files to Include
```
src/
└── pages/
    └── PesananDetail.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/order-detail-qr

# Add files
git add src/pages/PesananDetail.tsx

# Commit
git commit -m "feat: create order detail page with large QR code

- Add PesananDetail.tsx page component
- Display large QR code (280x280px)
  * Generate from order ID
  * High quality (level 'H')
  * Include margin
  * Centered display
- Show order information
  * Order ID (prominent display)
  * Package name and store name
  * Pickup time (with countdown if active)
  * Store location with map link
  * Price and savings info
  * Order date and time
  * Status badge
- Implement order timeline
  * Step 1: Pesanan Dibuat ✓ (always checked)
  * Step 2: Siap Diambil (checked if pickup time reached)
  * Step 3: Selesai (checked if status='completed')
  * Visual progress indicator
  * Timestamps for each step
- Add action buttons
  * Download QR Code button
    - Save QR as PNG image
    - Filename: QR-{orderId}.png
  * Bagikan QR button (optional)
    - Web Share API if available
    - Fallback: copy to clipboard
  * Konfirmasi Sudah Diambil button (for active orders)
    - Change status to 'completed'
    - Update localStorage
    - Show success toast
    - Trigger rating modal
  * Hubungi Toko button
    - Open phone dialer or WhatsApp
- Implement rating modal
  * Triggered after confirm pickup
  * 5-star rating selector
  * Review text area
  * Upload foto (optional, UI only)
  * Submit button
  * Save review to localStorage
  * Close modal after submit
- Display impact statistics (for completed orders)
  * 'Kamu sudah menyelamatkan X kg makanan'
  * 'Mengurangi X kg emisi CO2'
  * Achievement badge
  * Animated counters
- Add back button to Pesanan page
- Make navbar-less (no Header)
- Fully responsive
  * Stack all elements mobile
  * Two column desktop (QR + info left, actions + timeline right)"

# Push
git push -u origin feat/order-detail-qr
```

### ✅ Checklist
- [ ] QR code 280x280px displayed correctly
- [ ] QR code contains order ID
- [ ] Download QR saves as PNG file
- [ ] Timeline steps update based on status
- [ ] Countdown timer for active orders
- [ ] "Konfirmasi Sudah Diambil" updates status to completed
- [ ] Rating modal appears after confirmation
- [ ] 5-star rating selectable
- [ ] Submit rating saves to localStorage
- [ ] Impact stats show for completed orders
- [ ] Back button navigates to Pesanan
- [ ] All buttons functional
- [ ] Responsive: QR centered on mobile

---

## 1️⃣2️⃣ Branch: `feat/profile-page`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) merged

### 📦 Files to Include
```
src/
└── pages/
    └── Profil.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/profile-page

# Add files
git add src/pages/Profil.tsx

# Commit
git commit -m "feat: create user profile page

- Add Profil.tsx page component
- Display user information section
  * Profile photo (with upload button)
  * Full name
  * Email address
  * Phone number
  * Member since date
  * Edit profile button
- Show account statistics
  * Total orders completed
  * Total money saved
  * Food saved (kg)
  * CO2 reduced (kg)
  * Visual icons for each stat
- Implement edit profile modal/form
  * Edit name field
  * Edit email field
  * Edit phone field
  * Upload new photo
  * Save button
  * Cancel button
  * Update localStorage user data
- Add preferences section
  * Notification settings
    - Push notifications toggle
    - Email notifications toggle
    - SMS notifications toggle
  * Location preferences
    - Favorite locations (add/remove)
    - Radius for recommendations
  * Language preference (optional)
- Display achievement badges
  * First Order badge
  * 10 Orders badge
  * Eco Warrior badge (50 orders)
  * Food Saver badge (100kg saved)
  * Visual badge grid
  * Locked/unlocked states
- Show favorite stores
  * List of favorited stores
  * Quick access to store details
  * Remove from favorites option
- Add order history summary
  * Recent orders (last 5)
  * Quick link to full order history
- Implement logout button
  * Confirmation dialog
  * Clear localStorage user data
  * Redirect to login page
- Make fully responsive
  * Single column mobile
  * Two column desktop (info left, stats right)"

# Push
git push -u origin feat/profile-page
```

### ✅ Checklist
- [ ] User info loads from localStorage
- [ ] Profile photo upload triggers file picker
- [ ] Edit profile modal opens/closes
- [ ] Edit profile saves to localStorage
- [ ] Stats calculated from orders in localStorage
- [ ] Notification toggles functional
- [ ] Achievement badges display with correct status
- [ ] Logout clears user data and redirects
- [ ] Responsive: stack on mobile, split on desktop

---

## 1️⃣3️⃣ Branch: `feat/info-pages`
**Dependency:** Harus setelah `feat/components-base` (Branch 2) merged

### 📦 Files to Include
```
src/
└── pages/
    ├── Tentang.tsx
    └── Bisnis.tsx
```

### 🚀 Git Commands
```bash
# Update from main
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/info-pages

# Add files
git add src/pages/Tentang.tsx src/pages/Bisnis.tsx

# Commit
git commit -m "feat: create info pages (About and Business)

TENTANG PAGE (Tentang.tsx):
- Add hero section
  * Page title: 'Tentang GoodBite'
  * Subtitle with mission statement
  * Hero image or illustration
- Explain platform mission
  * 'Selamatkan Bumi Dari Limbah Makanan!'
  * Problem: food waste statistics
  * Solution: GoodBite platform
  * Impact: environmental benefits
- Add 'How It Works' section
  * Step 1: Browse surprise bags
  * Step 2: Reserve and pay
  * Step 3: Pick up at store
  * Visual step indicators with icons
- Display platform statistics
  * Total users registered
  * Total partners joined
  * Food saved (tons)
  * CO2 emissions reduced
  * Animated counters
- Add values section
  * Sustainability
  * Community
  * Innovation
  * Affordability
  * Icon + description for each
- Include team section (optional)
  * Founder/team photos
  * Brief bios
  * Social media links
- Add contact information
  * Email: hello@goodbite.id
  * Phone: +62 812-3456-7890
  * Address: Jakarta, Indonesia
  * Social media links
- Make fully responsive

BISNIS PAGE (Bisnis.tsx):
- Add hero section for business
  * Title: 'Bergabung Sebagai Mitra'
  * Subtitle: benefits for businesses
  * Call-to-action button
  * Background image/illustration
- Explain partner benefits
  * Reduce food waste
  * Additional revenue from surplus
  * Reach new customers
  * Positive brand image
  * Free marketing exposure
  * Visual icons for each benefit
- Show partner success stories
  * Testimonial cards
  * Partner logo
  * Quote from business owner
  * Results achieved (e.g., "Reduced waste by 70%")
- Add 'How to Join' section
  * Step 1: Register your business
  * Step 2: Setup store profile
  * Step 3: List surprise bags
  * Step 4: Accept orders and serve customers
  * Visual step progression
- Implement business registration form
  * Business name (required)
  * Business category dropdown
    - Bakery, Restaurant, Cafe, Supermarket, dll
  * Location/address (required)
  * Contact person name (required)
  * Email (required, validated)
  * Phone number (required, validated)
  * Business description (textarea)
  * Website/social media (optional)
  * Accept terms & conditions (checkbox)
  * Submit button
  * Form validation with error messages
- Show partner requirements
  * Must be legal registered business
  * Must have physical location
  * Food safety certified
  * Commitment to reduce waste
- Add FAQ section
  * Accordion with common questions
  * Questions about fees, operations, support
  * Expandable answers
- Include existing partner logos
  * Display partner businesses
  * Logos in grid layout
  * Build credibility
- Make fully responsive

General:
- Add smooth scroll animations
- Implement sticky header on scroll (optional)
- Add breadcrumb navigation
- Include social share buttons"

# Push
git push -u origin feat/info-pages
```

### ✅ Checklist

**Tentang.tsx:**
- [ ] Hero section display dengan mission statement
- [ ] How It Works section dengan 3 steps
- [ ] Platform statistics dengan animated counters
- [ ] Values section dengan icons dan descriptions
- [ ] Contact information complete
- [ ] Responsive di all screen sizes

**Bisnis.tsx:**
- [ ] Hero section dengan CTA button
- [ ] Partner benefits list complete
- [ ] Testimonials display dengan quotes
- [ ] How to Join steps dengan visual indicators
- [ ] Registration form dengan validation
- [ ] Form validation show errors
- [ ] Cannot submit dengan incomplete data
- [ ] FAQ accordion expand/collapse
- [ ] Partner logos display
- [ ] Responsive di all screen sizes

---

## 📊 Summary - Orang 3

| Branch # | Branch Name | Files | Estimated Time | Dependencies |
|----------|-------------|-------|----------------|--------------|
| 9 | `feat/auth-login` | 1 file | 4-5 hours | Branch 2 |
| 10 | `feat/order-management` | 3 files | 5-6 hours | Branch 2, 5 |
| 11 | `feat/order-detail-qr` | 1 file | 5-6 hours | Branch 10 |
| 12 | `feat/profile-page` | 1 file | 4-5 hours | Branch 2 |
| 13 | `feat/info-pages` | 2 files | 6-7 hours | Branch 2 |

**Total:** ~24-29 hours development time

---

## 🎯 Priority Order

```
Phase 1 (Can work parallel after Branch 2):
├─ feat/auth-login         ← Branch 9
└─ feat/info-pages         ← Branch 13

Phase 2 (After Branch 2 & 5):
└─ feat/order-management   ← Branch 10

Phase 3 (After Branch 10):
└─ feat/order-detail-qr    ← Branch 11

Phase 4 (Anytime after Branch 2):
└─ feat/profile-page       ← Branch 12
```

**Recommendation:** Kerjakan Branch 9 & 13 dulu (parallel), lalu 10 → 11, dan 12 kapan saja.

---

## 💡 Tips

### Working with localStorage - User Data

```javascript
// Save user after login/register
const user = {
  userId: `USER-${Date.now()}`,
  name: "John Doe",
  email: "john@example.com",
  phone: "081234567890",
  joinDate: new Date().toISOString(),
  profilePhoto: null
};
localStorage.setItem('goodbite_user', JSON.stringify(user));

// Get current user
const currentUser = JSON.parse(
  localStorage.getItem('goodbite_user') || 'null'
);

// Logout
localStorage.removeItem('goodbite_user');
```

### Calculate Stats from Orders

```javascript
// Get all orders
const orders = JSON.parse(
  localStorage.getItem('goodbite_orders') || '[]'
);

// Calculate stats
const stats = {
  totalOrders: orders.length,
  activeOrders: orders.filter(o => o.status === 'active').length,
  completedOrders: orders.filter(o => o.status === 'completed').length,
  totalSavings: orders.reduce((sum, o) => 
    sum + (o.originalValue - o.price), 0
  ),
  foodSaved: orders.filter(o => o.status === 'completed').length * 1.5, // kg
  co2Reduced: (orders.filter(o => o.status === 'completed').length * 1.5) * 2.5 // kg
};
```

### Download QR Code as Image

```javascript
import { useRef } from 'react';

const qrRef = useRef(null);

const downloadQR = () => {
  const canvas = qrRef.current.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `QR-${orderId}.png`;
    link.href = url;
    link.click();
  }
};

// In JSX
<div ref={qrRef}>
  <QRCode value={orderId} size={280} />
</div>
<Button onClick={downloadQR}>Download QR</Button>
```

### Countdown Timer

```javascript
const [countdown, setCountdown] = useState('');

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();
    const pickup = new Date(pickupDateTime);
    const diff = pickup - now;
    
    if (diff > 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${hours}j ${mins}m ${secs}d`);
    } else {
      setCountdown('Waktu pickup tiba!');
    }
  }, 1000);
  
  return () => clearInterval(timer);
}, [pickupDateTime]);
```

---

## 🎓 Learning Resources

- **React Hook Form:** https://react-hook-form.com/
- **QR Code React:** https://www.npmjs.com/package/qrcode.react
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/
- **Date-fns:** https://date-fns.org/ (untuk format tanggal)

---

## 📝 Testing Checklist

### Auth Page
- [ ] Login dengan user tidak ada (error handling)
- [ ] Register dengan email duplicate (validation)
- [ ] Password < 8 karakter (show error)
- [ ] Phone format salah (show error)

### Order Management
- [ ] Empty localStorage (show empty state)
- [ ] Active order countdown update setiap detik
- [ ] Tab switching filter correctly
- [ ] Stats calculation akurat

### Order Detail
- [ ] QR code unique per order
- [ ] Download QR saves correct filename
- [ ] Confirm pickup update status di localStorage
- [ ] Rating modal trigger after confirm
- [ ] Impact stats display for completed only

### Profile
- [ ] Edit profile update localStorage
- [ ] Stats match dengan actual orders
- [ ] Logout clear user data
- [ ] Upload photo trigger file picker

### Info Pages
- [ ] Tentang page load all sections
- [ ] Bisnis form validation works
- [ ] FAQ accordion expand/collapse
- [ ] All links functional

---

**Good luck, Orang 3! You're building the user experience layer! 👤💼**
