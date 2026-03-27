# 🗺️ Global Travels - Premium Travel Landing Page

Welcome to **Global Travels**, a modern, high-conversion multi-page landing page built with **React.js**. This project is designed as a professional showcase for a travel agency, demonstrating a premium aesthetic, seamless navigation, and interactive user feedback systems.

---

## 🚀 **Technology Stack**
*   **Core**: [React.js](https://reactjs.org/) (Class Component Architecture)
*   **Routing**: [React Router](https://reactrouter.com/) (Single Page Application - SPA)
*   **Build Tool**: [Vite](https://vitejs.dev/) (Fast Development Server & Bundler)
*   **Styling**: **Pure JavaScript Inline CSS** (Zero external CSS dependencies)
*   **Deployment Ready**: Optimized for hosting on Vercel, Netlify, or GitHub Pages.

---

## ✨ **Key Features**
*   **Premium Visuals**: Custom-designed hero sections with deep gradients, modern typography (Outfit and Inter from Google Fonts), and high-impact travel imagery.
*   **Glassmorphism Navigation**: A sticky navbar with a Gaussian blur effect (`backdrop-filter`) for a contemporary, high-end feel.
*   **Interactive Modal Simulation**: Implemented "Coming Soon" alerts on social links and interactive state-based contact form submission feedback.
*   **Optimized Grid Layout**: A fully responsive destination showcase using **CSS Grid** (`grid-template-columns: repeat(auto-fit, ...)`), eliminating the need for complex media queries.
*   **Zero-Conflict Styling**: By using an inline-only styling approach, the project ensures encapsulated design that never leaks to other components.

---

## 🏛️ **Page Breakdown**

### 1. **Home Page**
*   Features a massive hero section with a compelling "Escape the Ordinary" call to action.
*   "The Global Edge" section highlights the business value propositions: **Security**, **Curation**, and **Value**.

### 2. **Destinations Page**
*   A curated gallery of hand-picked global locations.
*   Showcases my ability to handle **Dynamic Data Mapping** from a component's state to a grid layout.

### 3. **About Us Page**
*   Establishes brand identity and mission through a balanced text-and-image layout.
*   Showcases professional branding consistency and company history.

### 4. **Contact Page**
*   A fully functional contact module using **Controlled Components**.
*   Implemented **State-Based Form Validation** and a 3-second automatic reset upon successful simulation.

---

## 📂 **Project Structure**
```text
src/
├── App.jsx          # Main layout wrapper, Global Navbar, Footer, and Router logic.
├── main.jsx         # Entry point, initializes the Browser Router.
├── index.html       # Global Reset & Typography definitions (Inline Style Tag).
└── pages/           # Individual view components for each route.
    ├── Home.jsx
    ├── Destinations.jsx
    ├── About.jsx
    └── Contact.jsx
```

---

## 🛠️ **Installation & Setup**
1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/global-travels.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Build for production:
    ```bash
    npm run build
    ```

---

## 🏆 **Interview Talking Points**
*   **Why Class Components?**: *"To demonstrate a baseline understanding of React's lifecycle and internal state architecture before moving to Hooks."*
*   **Why Inline Styles?**: *"To achieve complete component isolation and zero dependency styling, showing my deep understanding of the CSS-in-JS pattern."*
*   **UX Thinking**: *"Integrating the 'Coming Soon' and 'Success' feedback loops was a conscious choice to ensure a polished user experience even for future features."*

---

Created with ❤️ by **Devaki** | 2026