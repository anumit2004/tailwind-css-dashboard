<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Tailwind-css-Dashboard

## Dukaan Dashboard (React + Tailwind)

A responsive **Order Management UI** of Dukaan built using **React** and **Tailwind CSS**. This dashboard is designed to manage and display order-related data in a clean and scrollable layout.

---

### Feature:

*  Mobile responsive with horizontal scroll on overflow
*  Visual status indicators: *Successful* / *Processing*
*  Reusable `CardData` components for each order entry
*  Sticky sidebar and header with smooth transitions

---

### Project Structure

```bash
src/
├── components/
│   ├── OrderCard.jsx       # Main card with search, filters, and orders
│   ├── RevenueCard.jsx     # Dashboard cards with summary
│   └── CardData.jsx        # Individual order row component
├── App.jsx                 # Main component with layout and responsiveness
public/
├── logo.svg                # Optional application logo
```

---

### Tech Stack

* **React** (Functional Components)(limited)
* **Tailwind CSS** (Utility-first styling)
* **Heroicons** (SVG icons)
* **Responsive Layout** (Flexbox & Grid)

---

### UI Behavior

* Horizontal scroll enabled when order list overflows:

```jsx
<div className="overflow-x-auto">
  {/* Table or Flex Row */}
</div>
```

* Responsive hiding using Tailwind:

```jsx
<div className="hidden md:block">Button</div>
```

* Sidebar toggle for mobile screens using `useState`

---

### Example Preview

> <img width="1919" height="885" alt="image" src="https://github.com/user-attachments/assets/fe9cc655-bc07-4a52-8fdb-abf45efc2baa" />


---


### Author

Made with ❤️ by **Anumit Kumar Jana**
>>>>>>> cc80ab3b116a9bb7b1c12e63a810d6027666dd18
