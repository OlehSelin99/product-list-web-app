# Product List Web App

A simple React application for managing a list of products. This project is designed for learning purposes and demonstrates basic React concepts with Redux state management.

## 🚀 Features

- **Add Products**: Add new products to your list
- **View Products**: Display all products in a clean interface
- **Remove Products**: Delete products from the list
- **Modern UI**: Built with Ant Design components for a professional look

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Redux Toolkit** - State management
- **Ant Design** - UI component library
- **Vite** - Fast build tool and dev server
- **Vitest** - Testing framework

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── app/                 # Redux store configuration
├── features/
│   └── list/          # Product list feature
│       ├── ListProducts.tsx
│       ├── ModalListProducts.tsx
│       ├── ModalRemove.tsx
│       └── productsSlice.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## 🎓 Learning Objectives

This project helps you learn:

- **React Hooks**: Using useState, useEffect, and custom hooks
- **Redux Toolkit**: State management with createSlice and useSelector
- **TypeScript**: Type safety in React applications
- **Component Architecture**: Organizing code into features
- **Modern UI**: Using Ant Design components
- **Testing**: Writing tests with React Testing Library

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new features
- Improve the UI/UX
- Add more tests
- Refactor code for better organization

## 📝 License

This project is for educational purposes.

---

**Created by @oleh__selin** 🚀
