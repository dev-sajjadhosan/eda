# 📦 EDA - Auto Export Default Generator

**EDA** is a lightweight dev tool that automatically adds `export default` to your React/JSX/TSX component files inside `src/**`. Built for developers who move fast and forget to export their components — EDA’s got your back!

---

## ⚡ Features

* ✅ Watches your `src/**` for new/changed files
* ✅ Adds `export default` to components automatically
* ✅ Detects function/arrow component names
* ✅ Wraps anonymous JSX into named export
* ✅ Supports `.ts`, `.tsx`, `.js`, `.jsx`
* ✅ Built with Babel parser + traverse

---

## 🚀 Install

```bash
npm i @eda-plugin/eda
```

---

## 🔧 Usage

```bash
eda
```

By default, it watches `src/`.

You can also specify a directory:

```bash
eda src/components
```

It will watch that folder and auto-export any new or updated component files.

---

## 🧠 Example

### Before:

```tsx
function Header() {
  return <h1>Hello</h1>
}
```

### After EDA runs:

```tsx
function Header() {
  return <h1>Hello</h1>
}

export default Header;
```

---

## 🧰 Internals

EDA uses:

* `@babel/parser` to parse modern JS/TS
* `@babel/traverse` to extract component names
* `chokidar` to watch file changes

---

## 🛠 Dev Commands

```bash
npm run build   # build to dist
npm run dev     # start in watch mode
```

---

## 🤝 Contributing

Pull requests and issues are welcome! Feel free to fork the repo and improve the tool.

---

## 🧑‍💻 Author

Made with ❤️ by **Mohammad Sajjad Hosan**
[LinkedIn](https://www.linkedin.com/in/devsajjadhosan)

---

## 📄 License

MIT License — free for personal and commercial use.

---

## 📌 TODOs

* [ ] Support auto write jsx or tsx basic structure
* [ ] Support auto-import + index.ts sync
* [ ] Add config file support
* [ ] Option to skip certain folders/files
