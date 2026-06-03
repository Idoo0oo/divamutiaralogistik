# PRODUCT REQUIREMENT DOCUMENT (PRD)
## Project: PT Diva Mutiara Logistik - Company Profile Website

---

### 1. OVERVIEW & OBJECTIVES
*   **Company Name:** PT Diva Mutiara Logistik
*   **Industry:** Shipping & Container Logistics (National Scale)
*   **Target Audience:** B2B Clients, Corporate Logistics Managers, Manufacturers.
*   **Main Goal:** Build high industry trust, showcase national route capabilities, and convert visitors into leads via interactive tools.
*   **Core Value Proposition:** Highly competitive pricing for specific routes & high-reliability services.

---

### 2. DESIGN & VISUAL STYLING
*   **Design System:** Corporate Modern, Clean, Solid, and Professional.
*   **Primary Color:** Logistics Orange (Based on Company Logo) as an accent/action color.
*   **Secondary/Base Colors:** Deep Navy/Charcoal (for corporate trust) and Crisp White/Light Gray (for cleanliness).
*   **Aesthetics:** Smooth and subtle animations (Framer Motion) on scroll and interactions to maintain a high-end corporate feel (avoid excessive or distracting animations).

---

### 3. TECH STACK & ARCHITECTURE (NEXT.JS)
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Icons:** Lucide React

---

### 4. CORE PAGE STRUCTURE & SEO METADATA
Every page must implement Next.js Metadata API for strict SEO optimization. Target keywords focus on national B2B container logistics.

#### A. Home Page (`/`)
*   **Hero Section:** High-impact heading with "Logistics Orange" CTA buttons. Subtle fade-in animations.
*   **Value Proposition:** Highlight "Harga Kompetitif di Rute Strategis".
*   **Client-Centric Trust Section (Opsi 3):** Deep case studies, dynamic project success stories (e.g., "Shipping 500 Tons of Cargo safely to Surabaya"), client logos, and high-quality field imagery.
*   **SEO Target:** "Jasa Pengiriman Kontainer Domestik Terbaik", "Ekspedisi Cargo Kontainer Nasional".

#### B. About & Fleet Page (`/about`)
*   **Content:** Company legality, corporate values, and interactive grid showcasing container types (20ft, 40ft, FCL, LCL).
*   **SEO Target:** "Profil Perusahaan Logistik Kontainer", "Armada PT Diva Mutiara Logistik".

#### C. Interactive Calculator Page (`/calculator`) - *CORE FEATURE*
*   **Feature Name:** Smart Container Volume Calculator.
*   **Functionality:** A clean, multi-step frontend form where users input Cargo Dimensions (Length, Width, Height in cm) and Total Weight (kg). 
*   **Logic:** The system calculates total CBM (Cubic Meters) and recommends the best option: 
    *   Under 15 CBM: Recommend "LCL Service (Less than Container Load) for cost efficiency".
    *   15 - 28 CBM: Recommend "1x 20ft Container (FCL)".
    *   28 - 60 CBM: Recommend "1x 40ft Container (FCL)".
*   **Conversion Call-to-Action:** A dynamic "Minta Penawaran Harga Kompetitif" button that auto-fills the calculated data into a WhatsApp message or Quote Form.
*   **SEO Target:** "Kalkulator Kubikasi Kontainer", "Hitung Kubikasi Pengiriman Cargo".

---

### 5. NEXT.JS RECOMMENDED FOLDER STRUCTURE
```text
src/
├── app/
│   ├── layout.tsx         # Global Layout & Base SEO
│   ├── page.tsx           # Homepage (Client-centric)
│   ├── about/
│   │   └── page.tsx       # About & Fleet
│   ├── calculator/
│   │   └── page.tsx       # Smart Volume Calculator Page
│   └── globals.css
├── components/
│   ├── ui/                # Reusable clean components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── VolumeCalculator.tsx # Interactive Calculator logic