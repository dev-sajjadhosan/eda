// README.md
# EDA — Easy Default Auto-export 🌀

> 🧙‍♂️ Just write your component. No more export default ever.

## 📦 Install
npm install eda
## ⚙️ Setup (Vite)
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { eda } from 'eda';

export default defineConfig({
  plugins: [react(), eda()],
});
## 🎯 What it does
- Watches all src/**/*.tsx|jsx|ts|js
- Automatically adds export default ComponentName;
- If no name found, wraps JSX into const Anonymous and exports

## ✨ Example
function HomePage() {
  return <div>Hello!</div>;
}
➡️ becomes:
function HomePage() {
  return <div>Hello!</div>;
}

export default HomePage;
## ✌️ Lazy Dev Approved
No config. No manual exports. Just write.

---

Made with 💚 by [Sajjad Hosan](https://github.com/your-username)