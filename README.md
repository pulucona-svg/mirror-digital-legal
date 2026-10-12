# Mirror Digital — Standalone Legal Website

Official legal documentation, user agreement, privacy disclosures, and account lifecycle guidelines for the **Mirror Digital** educational platform.

This website is a standalone, lightweight static web project designed for continuous deployment via **Vercel** linked to GitHub.

---

## 1. Project Overview

* **Platform Name:** Mirror Digital
* **Target Audience:** Students, educators, researchers, and platform compliance reviewers.
* **Repository:** `https://github.com/pulucona-svg/mirror-digital-legal.git`
* **Production Deployment:** Vercel (`mirror-digital-legal.vercel.app`)
* **Technology Stack:** Semantic HTML5, CSS3 (Design Tokens & Variables), Vanilla JavaScript (Zero external dependencies).
* **Official Contact Email:** `mirrordigitalofficial@gmail.com`
* **Governing Law:** Laws of the Republic of Kenya
* **Document Version:** 1.0 (Effective October 1, 2026)

---

## 2. Route Architecture

The site utilizes clean directory routing supported natively by Vercel:

| Route | Source File | Description |
|---|---|---|
| `/` | `index.html` | Platform introduction, legal hub overview, and navigation calls-to-action. |
| `/privacy-policy` | `privacy-policy/index.html` | Complete 37-section authoritative Privacy Policy from the Flutter app plus verified technical disclosures. |
| `/terms-and-conditions` | `terms-and-conditions/index.html` | Complete 30-section authoritative Terms & Conditions agreement from the Flutter app. |
| `/delete-account` | `delete-account/index.html` | Dedicated step-by-step account deletion guide with verified in-app UI workflow, 30-day grace period, and restoration window. |

---

## 3. Directory Structure

```text
mirror digital web/
├── .gitignore                      # Git exclusion rules
├── README.md                       # Documentation & deployment guide
├── vercel.json                     # Vercel cleanUrls & HTTP security headers
├── index.html                      # Route: /
├── privacy-policy/
│   └── index.html                  # Route: /privacy-policy (37 Sections + Technical Disclosures)
├── terms-and-conditions/
│   └── index.html                  # Route: /terms-and-conditions (30 Sections)
├── delete-account/
│   └── index.html                  # Route: /delete-account (Verified App UI Deletion Guide)
└── assets/
    ├── css/
    │   ├── variables.css           # Design tokens, color system, spacing scale
    │   ├── main.css                # Layout, header, navigation, cards, footer
    │   └── legal.css               # Two-column layout, sticky TOC, callouts, print CSS
    ├── js/
    │   └── main.js                 # Mobile menu toggle, legal TOC scrollspy, year helper
    └── images/
        ├── app-icon.jpeg           # Official Mirror Digital app icon (720x721 JPEG)
        ├── favicon.svg             # Brand icon (SVG)
        └── logo.svg                # Brand logo with typography (SVG)
```

---

## 4. Legal Document Inventory & Sources of Truth

All legal documents published on this website originate directly from the authoritative source in the Mirror Digital Flutter application:
`lib/constants/legal_constants.dart` in `mirror_laikipia`.

### A. Terms & Conditions (30 Sections)
* **Source:** `LegalConstants.termsIntro`, `LegalConstants.termsSections`, and `LegalConstants.termsAcknowledgement`.
* **Structure:** Complete verbatim reproduction of all 30 numbered sections covering:
  1. Acceptance of Terms
  2. Description of the Service
  3. User Eligibility
  4. User Account and Security
  5. Acceptable Use Policy
  6. Educational Materials and Intellectual Property
  7. User-Generated Content
  8. Content Moderation
  9. Digital Purchases and Fees
  10. Payment Processing (Paystack)
  11. Subscriptions and Auto-Renewal
  12. Offline Access
  13. Third-Party Services and Links
  14. Privacy and Data Protection
  15. Data Storage and Synchronization
  16. Communication and Notifications
  17. Feedback and Submissions
  18. Service Modifications and Availability
  19. Account Termination and Deletion
  20. Suspension of Access
  21. Disclaimer of Warranties
  22. Limitation of Liability
  23. Indemnification
  24. Dispute Resolution
  25. Governing Law and Jurisdiction (Kenya)
  26. Severability
  27. Entire Agreement
  28. Assignment
  29. Changes to These Terms
  30. Contact Information

### B. Privacy Policy (37 Sections + Supplemental Architecture Disclosures)
* **Source:** `LegalConstants.privacyPolicyIntro`, `LegalConstants.privacyPolicySections`, and `LegalConstants.privacyPolicyAcknowledgement`.
* **Structure:** Complete verbatim reproduction of all 37 numbered sections covering:
  1. Introduction and Scope
  2. Data Controller Information
  3. Information We Collect
  4. Information You Provide Directly
  5. Information Collected Automatically
  6. Device and Log Information
  7. How We Use Your Information
  8. Legal Basis for Processing
  9. Consent Management
  10. Educational Data and Progress Tracking
  11. Data Storage and Hosting
  12. Cloud Firestore and Firebase Services
  13. Image and Media Storage
  14. Payment Data and Transactions
  15. Third-Party Service Providers
  16. Google Services Integration
  17. Analytics and Diagnostics
  18. In-App Advertising
  19. Data Sharing and Disclosure
  20. Offline Data Caching
  21. Data Security Measures
  22. Data Retention Policy
  23. Account Deletion and Data Removal
  24. Your Data Protection Rights
  25. Access and Correction Rights
  26. Right to Restrict Processing
  27. Right to Data Portability
  28. Right to Object
  29. Children's Privacy
  30. Cross-Border Data Transfers
  31. Cookies and Tracking Technologies
  32. Push Notifications and Alerts
  33. Security Breach Notification
  34. Changes to This Privacy Policy
  35. Regulatory Authority and Complaints
  36. Contacting the Data Protection Officer
  37. Formal Acknowledgement
* **Supplemental Architectural Disclosures:** Explicit, verified technical breakdowns for Firebase Authentication & Cloud Firestore (Google LLC), ImageKit CDN (ImageKit Ltd), Paystack payment gateway (Paystack Inc), and Google AdMob.

### C. Account Deletion & Data Retention Guide
* **In-App Flow:** Fully verified against the Flutter application codebase (`ProfileScreen` &rarr; Overflow Menu `⋮` &rarr; `Delete Account` &rarr; `AccountDeletionScreen` &rarr; `Delete Account` &rarr; Confirmation Dialog &rarr; `Yes, Request Deletion`).
* **30-Day Grace Period:** Accounts are transitioned to `pending` status and hidden from public view for 30 calendar days.
* **Account Restoration:** Users can restore an account within 30 days simply by logging in and confirming on the `AccountRestoreScreen`.
* **Permanent Deletion:** After 30 days, personal data and authentication records are permanently purged via Cloud Functions. Sourced educational curriculum materials and public repository resources remain preserved for academic continuity.

---

## 5. Local Testing

### Run with Node:
```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');const p=8089,mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpeg':'image/jpeg','.svg':'image/svg+xml'};http.createServer((req,res)=>{let f=path.join(process.cwd(),req.url.split('?')[0]);if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(fs.existsSync(f)&&fs.statSync(f).isFile()){res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'text/plain'});fs.createReadStream(f).pipe(res)}else{res.writeHead(404);res.end('Not Found')}}).listen(p,()=>console.log('Listening on http://localhost:'+p));"
```

Open `http://localhost:8089` to verify:
* All 4 routes: `/`, `/privacy-policy`, `/terms-and-conditions`, `/delete-account`.
* Table of Contents active-link scrolling and anchor navigation.
* Responsive navigation drawer on mobile viewports (<768px).
* Contrast accessibility and print preview layout (`Ctrl+P`).

---

## 6. Vercel Deployment via GitHub

When ready to publish:

1. **Review and Stage Files:**
   ```bash
   git status
   git add .
   ```
2. **Commit Changes:**
   ```bash
   git commit -m "feat: complete Mirror Digital legal website with authoritative terms, privacy policy, and deletion guide"
   ```
3. **Push to GitHub:**
   ```bash
   git push origin main
   ```
4. **Connect to Vercel:**
   * In the Vercel dashboard, click **Add New Project** -> **Import Git Repository**.
   * Select `mirror-digital-legal`.
   * Framework Preset: **Other** (Static Site).
   * Deploy. Vercel automatically deploys all routes using `vercel.json`.
