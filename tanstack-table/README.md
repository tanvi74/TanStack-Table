<div align="center">

# TANSTACK-TABLE

*Transform Data Into Action with Seamless Precision*

![last commit](https://img.shields.io/badge/last%20commit-today-blue)
![typescript](https://img.shields.io/badge/typescript-98.3%25-blue)
![languages](https://img.shields.io/badge/languages-4-blue)

**Built with the tools and technologies:**

![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-DD3A0A?style=for-the-badge&logo=autoprefixer&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---

## Table of Contents

• [Overview](#overview)
• [Getting Started](#-getting-started)
  • [Prerequisites](#prerequisites)
  • [Installation](#installation--setup)
  • [Usage](#available-scripts)
• [Features](#-features-demonstrated)
• [Examples](#-available-examples)
• [Components](#-key-components)
• [Design](#-design--styling)
• [Data](#-sample-data)
• [Extending](#️-extending-the-project)
• [Contributing](#-contributing)
• [License](#-license)

---

## Overview

A comprehensive demonstration repository showcasing various implementations of **TanStack Table v8** with React and TypeScript. This project serves as a living examples gallery featuring different table configurations, from basic implementations to advanced features like infinite scrolling, column editing, and custom data handling.

## 🎯 What This Repository Does

This repository demonstrates **real-world table implementations** using TanStack Table:

- **Multiple Table Variants** - Different approaches for various use cases
- **Reusable Components** - Modular table components ready for production
- **Best Practices** - TypeScript interfaces and proper state management
- **Interactive Examples** - Live demos with sample data
- **Modern UI/UX** - Clean, responsive design with Tailwind CSS

## 📋 Features Demonstrated

### Core Table Functionalities
- ✅ **Sorting** - Click column headers to sort data
- ✅ **Filtering** - Global search across all columns
- ✅ **Pagination** - Navigate through large datasets
- ✅ **Row Selection** - Select individual or multiple rows
- ✅ **Responsive Design** - Works seamlessly on all screen sizes

### Advanced Features
- 🔄 **Infinite Scrolling** - Load data progressively as user scrolls
- 📝 **Column Editor** - Dynamically show/hide table columns
- 🎨 **Custom Column Types** - Badges, actions, and custom renderers
- 💾 **State Management** - Persistent table state across navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
2. **Install dependencies** - `npm install`
3. **Start development server** - `npm run dev`
4. **Open in browser** - `http://localhost:5173`

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📚 Available Examples

### 1. **Basic Table**
Simple table implementation with core features like sorting and filtering.

### 2. **Standard Grid Layout**
Professional-looking table with proper styling, pagination, and search functionality.

### 3. **Generic Data Table**
Reusable table component that can work with any data type - perfect for building your own applications.

### 4. **Column Editor Table**
Advanced table with column visibility controls, allowing users to show/hide columns dynamically.

### 5. **Infinite Data Table**
High-performance table with virtualization for handling large datasets efficiently.

### 6. **Row Selection Table**
Demonstrates row selection capabilities with bulk actions and state management.

## 🔧 Key Components

### `DataTable<T>`
The main reusable table component with full TypeScript generics support.

**Props:** data, columns, header, config, loading, emptyMessage

### `InfiniteDataTable<T>`
Virtualized table component for large datasets with infinite scrolling.

### Column Helpers
Pre-built column definitions for common use cases:
- `createSortableColumn()` - Standard sortable column
- `createSelectionColumn()` - Checkbox selection column
- `createBadgeColumn()` - Status badge column
- `createActionsColumn()` - Action buttons column

## 🎨 Design & Styling

The project uses **Tailwind CSS** for styling with:
- **Responsive Design** - Mobile-first approach
- **Accessible Components** - ARIA-compliant table implementations
- **Modern UI Elements** - Clean, professional appearance

## 🔍 Sample Data

The repository includes **500+ sample user records** with realistic data including user information, permissions, status indicators, and date fields for testing different column types.

## 🛠️ Extending the Project

### Adding New Examples
1. Create new component in `src/examples/`
2. Add to `tabItems` array in `Tabs.tsx`
3. Follow existing patterns for consistency

## 🤝 Contributing

This repository serves as a learning resource and example collection. Contributions are welcome through pull requests.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using TanStack Table v8**
