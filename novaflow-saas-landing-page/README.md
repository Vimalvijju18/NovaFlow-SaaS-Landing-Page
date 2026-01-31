# NovaFlow SaaS Landing Page

A high-performance, modern SaaS landing page recreation inspired by Solidroad. This project demonstrates expert-level frontend development using React, TypeScript, and Tailwind CSS, featuring a sophisticated dark-mode aesthetic with glassmorphism and state-based routing.

## 🚀 Overview

NovaFlow is a next-gen sales coaching platform concept. The application includes a fully responsive hero section, a multi-column dynamic footer, and over 20 unique sub-pages—each with its own specialized layout and visual elements (such as simulated dashboards, pricing tables, and resource galleries).

### Key Features
- **Hero Section:** Bold typography, gradient text, and animated floating UI elements.
- **Dynamic Routing:** A custom state-based navigation system that allows every link (Platform, Solutions, Pricing, etc.) to lead to a functional, unique page.
- **Unique Page Visuals:**
  - **Platform/Product Pages:** Simulated AI dashboard with live-rendered charts and status indicators.
  - **Pricing Page:** Professional tiered pricing cards with "Most Popular" highlighting.
  - **Resources Page:** Image-rich card gallery for guides and webinars.
  - **Auth Pages:** Clean, glassmorphic Login and Sign-up forms with validation UI.
- **Design Aesthetic:** Deep dark background (`#020617`), indigo/purple gradient accents, and heavy use of `backdrop-filter: blur()`.

## 🛠️ Tech Stack
- **Framework:** React 19 (ESM based)
- **Styling:** Tailwind CSS (Custom config for animations/colors)
- **Components:** Shadcn UI inspired custom components
- **Icons:** SVG-based Lucide style icons
- **Language:** TypeScript

## 📥 Setup Instructions

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📸 Screenshots

| Hero Section | Pricing Layout | AI Dashboard Visual |
| :--- | :--- | :--- |
| ![Hero](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400) | ![Pricing](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400) | ![Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400) |

## 🎨 Design Philosophy
The project prioritizes **Visual Hierarchy** and **Micro-interactions**. 
- **Animations:** Subtle `fade-in-up` and `float` animations reduce the static feel of the page.
- **Responsiveness:** A "mobile-first" approach ensures the grid systems stack elegantly on smaller screens while utilizing full-width whitespace on desktops.
- **Modular Code:** Components are decoupled (e.g., `Button.tsx`, `Hero.tsx`) to allow for high reusability and clean architecture.

---
*Created for the Frontend Engineering Assessment.*
