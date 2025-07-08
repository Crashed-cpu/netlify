# Ayush Saini - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡ Blazing fast performance with Vite
- 🎨 Modern UI with Tailwind CSS
- 🛠 Type-safe with TypeScript
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🌐 Ready for Netlify deployment

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `type-check` - Run TypeScript type checking

## 🚀 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Push to GitHub**: 
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Netlify**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The project will automatically deploy

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Background.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Journal.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Snapshots.tsx
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🔧 Configuration

- **Vite**: Configured for fast development and optimized builds
- **Tailwind CSS**: Custom configuration with Inter and JetBrains Mono fonts
- **TypeScript**: Strict type checking enabled
- **Netlify**: Functions and redirects configured

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
