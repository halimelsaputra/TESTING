# 🚀 QUICK REFERENCE - BRANCH STRATEGY

## 📊 Branch Dependency Graph

```
main (protected branch)
│
├─── [ORANG 1] ────────────────────────────────────────
│    │
│    ├─ 1. feat/project-setup ✓ (MUST BE FIRST!)
│    │   └─ 2. feat/components-base ✓
│    │       └─ 3. feat/header-footer ✓
│    │           └─ 4. feat/landing-page ✓
│
├─── [ORANG 2] ────────────────────────────────────────
│    │
│    ├─ 5. feat/package-data ✓ (after branch 1)
│    │   ├─ 6. feat/explore-page (after branch 2, 5)
│    │   ├─ 7. feat/package-detail (after branch 2, 5)
│    │   └─ 8. feat/checkout-flow (after branch 2, 5)
│
└─── [ORANG 3] ────────────────────────────────────────
     │
     ├─ 9. feat/auth-login (after branch 2)
     ├─ 10. feat/order-management (after branch 2, 5)
     │   └─ 11. feat/order-detail-qr (after branch 10)
     ├─ 12. feat/profile-page (after branch 2)
     └─ 13. feat/info-pages (after branch 2)
```

---

## 🎯 Push Timeline (Recommended)

### Week 1: Foundation
```
Day 1-2: Orang 1 → Branch 1 (project-setup) → MERGE ✓
Day 2-3: Orang 1 → Branch 2 (components-base) → MERGE ✓
Day 3-4: Orang 1 → Branch 3 (header-footer) → MERGE ✓
Day 4-5: Orang 1 → Branch 4 (landing-page) → MERGE ✓
```

### Week 2: Parallel Development
```
ORANG 2:
Day 1:   Branch 5 (package-data) → MERGE ✓
Day 2-3: Branch 6 (explore-page) → MERGE ✓
Day 3-4: Branch 7 (package-detail) → MERGE ✓
Day 4-5: Branch 8 (checkout-flow) → MERGE ✓

ORANG 3: (Parallel with Orang 2)
Day 1-2: Branch 9 (auth-login) → MERGE ✓
Day 2-3: Branch 10 (order-management) → MERGE ✓
Day 3-4: Branch 11 (order-detail-qr) → MERGE ✓
Day 4-5: Branch 12 (profile-page) → MERGE ✓
```

### Week 3: Final Features & Polish
```
Day 1-2: Orang 3 → Branch 13 (info-pages) → MERGE ✓
Day 3-5: All → Testing, bug fixes, code review, polish
```

---

## 📋 Branch Checklist by Person

### 👤 ORANG 1 (4 branches - Foundation)
```
☐ 1. feat/project-setup       [Priority: 🔴 CRITICAL]
☐ 2. feat/components-base     [Priority: 🔴 CRITICAL]
☐ 3. feat/header-footer       [Priority: 🟠 HIGH]
☐ 4. feat/landing-page        [Priority: 🟠 HIGH]
```

### 👤 ORANG 2 (4 branches - Core Features)
```
☐ 5. feat/package-data        [Priority: 🔴 CRITICAL]
☐ 6. feat/explore-page        [Priority: 🟡 MEDIUM]
☐ 7. feat/package-detail      [Priority: 🟡 MEDIUM]
☐ 8. feat/checkout-flow       [Priority: 🟡 MEDIUM]
```

### 👤 ORANG 3 (5 branches - User Features)
```
☐ 9.  feat/auth-login         [Priority: 🟡 MEDIUM]
☐ 10. feat/order-management   [Priority: 🟡 MEDIUM]
☐ 11. feat/order-detail-qr    [Priority: 🟢 LOW]
☐ 12. feat/profile-page       [Priority: 🟢 LOW]
☐ 13. feat/info-pages         [Priority: 🟢 LOW]
```

**Total: 13 branches**

---

## ⚡ Quick Commands Reference

### Start New Branch
```bash
git checkout main
git pull origin main
git checkout -b feat/branch-name
```

### Commit & Push
```bash
git add .
git commit -m "feat: short description

- Detail 1
- Detail 2"
git push -u origin feat/branch-name
```

### After PR Merged
```bash
git checkout main
git pull origin main
git branch -d feat/branch-name
```

---

## 🎨 Commit Message Format

```
<type>: <short description>

<detailed description>
- Bullet point 1
- Bullet point 2
- Bullet point 3
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code refactoring
- `test`: Add tests
- `chore`: Maintenance

**Example:**
```
feat: add user authentication page

- Implement login form with validation
- Add register form with password strength
- Include social login buttons (Google, Facebook)
- Save user data to localStorage
```

---

## 📊 Workload Distribution

| Person | Branches | Files | Est. Hours | Priority |
|--------|----------|-------|------------|----------|
| **Orang 1** | 4 | ~50 | 11-15h | 🔴🔴🔴 |
| **Orang 2** | 4 | ~4 | 15-20h | 🟡🟡 |
| **Orang 3** | 5 | ~6 | 24-29h | 🟡🟢 |

---

## 🔑 Key Files by Person

### Orang 1
```
✓ package.json, vite.config.ts, tailwind.config.ts
✓ All config files (tsconfig, postcss, eslint, etc)
✓ src/main.tsx, src/App.tsx, src/index.css
✓ src/components/Header.tsx, Footer.tsx, PackageCard.tsx
✓ src/components/ui/* (all UI components)
✓ src/lib/utils.ts
✓ src/pages/Beranda.tsx, NotFound.tsx
✓ src/img/* (all images)
✓ public/* (favicon, etc)
```

### Orang 2
```
✓ src/data/packages.ts
✓ src/pages/Jelajahi.tsx
✓ src/pages/PaketDetail.tsx
✓ src/pages/Checkout.tsx
```

### Orang 3
```
✓ src/pages/Login.tsx
✓ src/pages/Pesanan.tsx
✓ src/pages/PesananDetail.tsx
✓ src/pages/Profil.tsx
✓ src/pages/Tentang.tsx
✓ src/pages/Bisnis.tsx
✓ src/hooks/use-toast.ts, use-mobile.tsx
```

---

## 🚨 Critical Dependencies

**Everyone depends on:**
- Branch 1 (`feat/project-setup`) ← ORANG 1 MUST PUSH FIRST!

**Orang 2 & 3 depend on:**
- Branch 2 (`feat/components-base`) ← Need UI components

**Orang 3 depends on:**
- Branch 5 (`feat/package-data`) ← Need package data in orders

**Branch 11 depends on:**
- Branch 10 ← Order detail needs order management first

---

## 💡 Pro Tips

### ✅ DO's
- Pull from main before starting new branch
- Commit frequently with clear messages
- Test locally before pushing
- Create PR immediately after push
- Request review from teammates
- Merge quickly after approval (avoid conflicts)

### ❌ DON'Ts
- Never push directly to main
- Don't merge your own PR without review
- Don't make branches too big (keep focused)
- Don't wait days before merging (causes conflicts)
- Don't commit node_modules or .env files

---

## 🎯 Success Criteria

### Per Branch
- [ ] Code compiles without errors
- [ ] No ESLint warnings
- [ ] Feature works as expected
- [ ] Responsive on mobile & desktop
- [ ] No console errors
- [ ] Commit message descriptive

### Overall Project
- [ ] All 13 branches merged to main
- [ ] Website runs without errors
- [ ] All features functional
- [ ] Clean commit history
- [ ] Good code documentation

---

## 📞 Communication Protocol

### Daily Standup (5 min)
- **Yesterday:** What branch did you work on?
- **Today:** What branch are you working on?
- **Blockers:** Any issues?

### When to Notify Team
- ✅ Started new branch
- ✅ Pushed branch (PR ready)
- ✅ Need code review
- ✅ PR approved and merged
- ⚠️  Stuck on something
- 🐛 Found a bug

### Code Review Etiquette
- Review within 24 hours
- Give constructive feedback
- Approve if no major issues
- Request changes politely if needed

---

## 🏆 Gamification (Optional)

Track your team's progress!

```
Achievements:
🥇 First Pusher - First person to push a branch
🔥 Speed Demon - Merge 3 branches in one day
🎯 Zero Bugs - Branch merged without issues
👀 Code Reviewer - Review 5+ PRs
🚀 Feature Complete - All your branches merged
⭐ MVP - Most impactful contribution
```

---

## 📚 Documentation Files

```
pembagian-branch/
├── README.md                  ← Main strategy overview
├── ORANG1-BRANCHES.md         ← Detailed guide for Orang 1
├── ORANG2-BRANCHES.md         ← Detailed guide for Orang 2
├── ORANG3-BRANCHES.md         ← Detailed guide for Orang 3
├── QUICK-REFERENCE.md         ← This file (quick lookup)
└── BRANCH-TRACKING.md         ← Progress tracker (coming next)
```

---

## 🎓 Git Resources

- **Git Basics:** https://git-scm.com/book/en/v2
- **GitHub Flow:** https://guides.github.com/introduction/flow/
- **Conventional Commits:** https://www.conventionalcommits.org/
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

**Happy Branching! 🌿✨**

For detailed instructions, check your respective file:
- 👤 Orang 1 → `ORANG1-BRANCHES.md`
- 👤 Orang 2 → `ORANG2-BRANCHES.md`
- 👤 Orang 3 → `ORANG3-BRANCHES.md`
