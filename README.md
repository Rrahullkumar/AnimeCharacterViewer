# Anime Character Viewer 🌸

A simple yet stylish anime character browser built using **Node.js**, **HTML**, and **CSS** — no frontend frameworks, no databases, just pure fun and server-side rendering using the `fs` and `http` modules.

🔗 [View on Render](https://animecharacterviewer.onrender.com/)

---

## ✨ Features

- View a list of anime characters with aesthetic cards 💫  
- Click **"View More"** to see detailed character info (image, name, nicknames, about)
- Smoothly styled using modern CSS
- Fully server-rendered using Node.js core modules

---

## 📁 Tech Stack

- **Node.js** (no frameworks, just `http`, `fs`, and `url`)
- **HTML Templates**
  - **Vanilla CSS** (custom-styled cards and layout)

---

## 🧠 How It Works

- All character data is fetched from a local JSON file (`anime.json`)
- The server dynamically builds HTML pages using `.replace()` on template files
- Routes handled:
  - `/` — shows all characters
  - `/?id=1` — shows single character details

---

## 🛠 How to Run Locally

```bash
git clone https://github.com/yourusername/anime-character-viewer.git
cd anime-character-viewer
npm install
node index.js
